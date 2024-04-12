"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const TITLE_MAX_CHAR_COUNT = 50;
const CONTENT_MAX_CHAR_COUNT = 280;

// TODO: Provide better error message to end user.
const formSchema = z.object({
  title: z.string().min(1).max(TITLE_MAX_CHAR_COUNT),
  content: z.string().min(1).max(CONTENT_MAX_CHAR_COUNT),
});

async function submitPost(data: z.infer<typeof formSchema>) {
  const res = await fetch("/api/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to submit post");
  }

  return res.json();
}

type PostFormCallback = {
  submitCallback: () => void;
};

export default function PostForm({ submitCallback }: PostFormCallback) {
  const [titleCharCount, setTitleCharCount] = useState(0);
  const [contentCharCount, setContentCharCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    submitPost(values).then(() => {
      submitCallback();
      form.reset();
      setSubmitting(false);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setTitleCharCount(e.target.value.length);
                  }}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {titleCharCount}/{TITLE_MAX_CHAR_COUNT}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setContentCharCount(e.target.value.length);
                  }}
                />
              </FormControl>
              <FormDescription className="flex justify-end">
                {contentCharCount}/{CONTENT_MAX_CHAR_COUNT}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitting ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </form>
    </Form>
  );
}
