import { db } from "@/db";
import Link from "next/link";

export default async function BlocksPage() {
  const blocks = await db.block.findMany();
  const renderedBlocks = blocks.map((block) => {
    return (
      <Link
        key={block.id}
        className="flex justify-between items-center p-2 border rounded"
        href={`/blocks/${block.id}`}
      >
        <div>{block.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h2 className="text-xl font-bold">Blocks</h2>
        <Link href="/blocks/create" className="border p-2 rounded">
          Create
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBlocks}</div>
    </div>
  );
}
