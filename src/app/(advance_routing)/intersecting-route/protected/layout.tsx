import Link from "next/link";

export default function RootLayout({
  children,
  intersect,
}: {
  children: React.ReactNode;
  intersect: React.ReactNode;
}) {
  const blogs = [1, 2, 3, 4];

  return (
    <>
      <main className="max-w-2xl mx-auto p-6">
        <div className="border rounded-sm p-4">
          <h1>Đây là phần bảo mật layout</h1>
          <h2 className="text-2xl font-bold mb-4">Danh sách blogs</h2>

          <div className="flex flex-col space-y-3">
            {blogs.map((id) => (
              <Link
                key={id}
                href={`/intersecting-route/blogs/${id}`}
                className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                Blog {id}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 border rounded-sm ">
          <h1>Đây là phần bảo mật children</h1>
          {children}
          {intersect}
        </div>
      </main>
    </>
  );
}
