"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    await db.block.create({ data: { title, code } });
    redirect("/blocks");
}

export async function updateBlock(blockId: number, formData: FormData) {
    await db.block.update({
        where: {
            id: Number(blockId),
        },
        data: {
            title: formData.get("title") as string,
            code: formData.get("code") as string,
        }
    })
    redirect(`/blocks/${blockId}`);
}

export async function processDelete(blockId: number, formData: FormData) {
    const result = formData.get("isDelete") as string;
    if (result === "true") {
        await db.block.delete({
            where: {
                id: Number(blockId),
            }
        })
        redirect(`/blocks`);
    } else {
        redirect(`/blocks/${blockId}`);
    }

}