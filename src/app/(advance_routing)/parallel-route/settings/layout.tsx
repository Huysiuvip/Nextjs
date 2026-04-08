import Link from "next/link";

export default function DashboardLayout({
  children,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div className="p-8">
      {children}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">{analytics}</div>
    </div>
  );
}
