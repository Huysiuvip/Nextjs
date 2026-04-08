export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white p-6 rounded-xl flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Toàn Trang Sản Phẩm {id}</h1>
        <div className="skeleton-title"></div>
        <div className="skeleton-card"></div>
      </div>
    </div>
  );
}
