import { updateBlock } from "@/app/actions";
import { db } from "@/db";

export default async function UpdateBlockPage({ params }: any) {
    const block = await db.block.findUnique({
        where: {
            id: Number(params.id),
        }
    });
    const updateBlockWithBlockId = updateBlock.bind(null, Number(params.id));
    return (
        <form action={updateBlockWithBlockId}>
        <h3 className="font-bold m-3">Update a Block</h3>
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
            <label className="w-12" htmlFor="title">Title</label>
            <input
                className="border rounded p-2 w-full"
                type="text"
                name="title"
                id="title"
                defaultValue={block?.title}
            />
            </div>
            <div className="flex gap-4">
            <label className="w-12" htmlFor="code">Code</label>
            <textarea
                className="border rounded p-2 w-full"
                id="code"
                name="code"
                defaultValue={block?.code}
            />
            </div>
            <button
            className="rounded p-2 bg-blue-600 hover:bg-blue-800 text-white"
            type="submit"
            >
                Update
            </button>
        </div>
        </form>
    );
}
