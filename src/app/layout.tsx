// trang layout.txt cũng là 1 trang đặc biệt của nextjs
// là tầng layout trên cùng của ứng dụng
// trang này sẽ render nội dung nó trước khi render children
// children chính là toàn bộ các rôt con bên trong ứng dụng
// do đó nó chứa các thẻ như head, body, meta
// nên đặt trang này các authentication , đóng mở sidebar, theme, các state dùng chung 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <h1>App layout</h1>
        {children}
      </body>
    </html>
  );
}
