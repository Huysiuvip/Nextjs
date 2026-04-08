import Link from "next/link";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const products = [1, 2, 3, 4];

  return (
    <>
      <main className="max-w-2xl mx-auto p-6">
        <div className="border rounded-sm p-4">
          <h1>Đây là phần layout</h1>
          <nav>
            <Link
              className="link"
              href="/intersecting-route/blogs"
            >
              Blogs
            </Link>
            <Link
              className="link"
              href="/intersecting-route/products"
            >
              Sản phẩm
            </Link>
            <Link
              className="link"
              href="/intersecting-route/protected"
            >
              Bảo mật
            </Link>
          </nav>
          <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>

          <div className="flex flex-col space-y-3">
            {products.map((id) => (
              <Link
                key={id}
                href={`/intersecting-route/products/${id}`}
                className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                Sản phẩm {id}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-sm ">
          <h1>Đây là phần children</h1>
          {children}
          {modal}
        </div>
      </main>
    </>
  );
}
