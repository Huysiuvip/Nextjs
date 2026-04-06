import { revalidatePath } from "next/cache";

const RevalidatePage = () => {
  return (
    <form action={revalidateFunction}>
      <button
        className="border rounded-sm m-4 p-2 bg-cyan-100 cursor-pointer"
        type="submit"
      >
        Revalidate Path
      </button>
    </form>
  );
};

async function revalidateFunction() {
  "use server";
  // revalidatePath sẽ xoá cache của path này, khi user có request mới sẽ tự động gọi lại api để lấy dữ liệu mới nhất
  revalidatePath("/datacache");
  // tùy đường đẫn mà xóa cache của fetch đó
}

export default RevalidatePage;
