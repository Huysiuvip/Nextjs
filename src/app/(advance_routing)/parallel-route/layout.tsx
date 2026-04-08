import Link from "next/link";

export default function DashboardLayout({
  children,
  revenueChart,
  userStats,
}: {
  children: React.ReactNode;
  revenueChart: React.ReactNode;
  userStats: React.ReactNode;
}) {
  return (
    <div className="p-8">
      <nav className="flex gap-4">
        <Link
          className="underline"
          href="/parallel-route"
        >
          Dữ Liệu
        </Link>

        <Link
          className="underline"
          href="/parallel-route/settings"
        >
          Hệ Thống
        </Link>
      </nav>

      {children}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {revenueChart}
        {userStats}
      </div>
    </div>
  );
}
