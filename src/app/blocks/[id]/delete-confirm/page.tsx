import { updateBlock } from "@/app/actions";
import { db } from "@/db";
import { processDelete } from "@/app/actions";

export default async function DeleteBlockConfirmPage({ params }: any) {
    const processDeleteWithBlockId = processDelete.bind(null, Number(params.id));
    return (
        <form action={processDeleteWithBlockId}>
            <legend>Are you sure you want to delete this block?</legend>
            <input type="radio" name="isDelete" value="true" id="yes"/><label htmlFor="yes">Yes</label>
            <input type="radio" name="isDelete" value="false" id="no"/><label htmlFor="no">No</label>
            <button type="submit">Confirm my selection</button>
        </form>
    );
}
