import { LanguageServiceClient } from "@google-cloud/language";

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
const projectId = process.env.GOOGLE_PROJECT_ID;

const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");

const credentials = {
  client_email: clientEmail,
  private_key: formattedPrivateKey,
  project_id: projectId,
};

const client = new LanguageServiceClient({ credentials });

export const analyzeSentiment = async (text: string) => {
  const document = {
    content: text,
    type: "PLAIN_TEXT",
  };

  // @ts-ignore - can't find types.
  const [result] = await client.analyzeSentiment({ document });
  return result;
};
