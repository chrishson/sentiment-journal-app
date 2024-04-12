import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Prisma } from "@prisma/client";
import { SortType } from "./Journal";

type PostSortOptionsProps = {
  sortType: SortType;
  sortOrder: Prisma.SortOrder;
  setSortType: (value: SortType) => void;
  setSortOrder: (value: Prisma.SortOrder) => void;
};

export default function PostSortOptions({
  sortType,
  sortOrder,
  setSortType,
  setSortOrder,
}: PostSortOptionsProps) {
  return (
    <div className="flex gap-2">
      <Select
        onValueChange={(value: SortType) => setSortType(value)}
        defaultValue={sortType}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Sort Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="createdAt">Created At</SelectItem>
          <SelectItem value="sentimentScore">Sentiment Score</SelectItem>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value: Prisma.SortOrder) => setSortOrder(value)}
        defaultValue={sortOrder}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Order Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Descending</SelectItem>
          <SelectItem value="asc">Ascending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
