import { updateTag } from "next/cache";

const UpdateTagPage = async () => {
  return (
    <>
      <form action={updateNumberTag}>
        <button
          className="
      border rounded-sm m-4 p-2 bg-cyan-100 cursor-pointer
    "
          type="submit"
        >
          Update Number Tag
        </button>
      </form>
      <form action={updateNameTag}>
        <button
          className="
      border rounded-sm m-4 p-2 bg-cyan-100 cursor-pointer
    "
          type="submit"
        >
          Update Name Tag
        </button>
      </form>
    </>
  );
};

async function updateNumberTag() {
  "use server";
  updateTag("number");
}

async function updateNameTag() {
  "use server";
  updateTag("name");
}

export default UpdateTagPage;
