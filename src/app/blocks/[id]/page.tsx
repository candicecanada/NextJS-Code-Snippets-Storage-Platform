import { db } from "@/db";
import Link from "next/link";

export default async function BlockPage({ params }: any) {
  const block = await db.block.findUnique({
    where: {
        id: Number(params.id),
    }
  });
  return (
    <div>
        <div className="flex m-2 justify-between items-center">
            <h2>{block?.title}</h2>
            <div>
                <Link href={`/blocks/${params.id}/update`} className="border p-2 rounded">
                    Update
                </Link>
                <Link href={`/blocks/${params.id}/delete-confirm`} className="border p-2 rounded">
                    Delete
                </Link>
            </div>
        </div>
        
        <p>{block?.code}</p>
        <Link href="/blocks">Back to all blocks</Link>
    </div>
  );
}
