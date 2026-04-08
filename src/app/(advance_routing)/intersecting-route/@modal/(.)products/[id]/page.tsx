import { CloseButton } from "@/components/CloseButton";

export default async function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md flex flex-col gap-4">
        <h2 className="text-lg font-semibold mb-4">Intersect sản phẩm {id}</h2>

        <div className="skeleton-title"></div>
        <div className="skeleton-card"></div>

        <CloseButton />
      </div>
    </div>
  );
}
