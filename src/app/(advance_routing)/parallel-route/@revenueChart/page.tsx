import { delay } from "@/lib";

const RevenueChart = async () => {
  await delay(1500);
//   throw new Error("Lỗi");

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border">
      <h3 className="text-lg font-bold mb-2">Biểu đồ Doanh thu</h3>
      <div className="h-32 bg-blue-50 flex items-end gap-2 p-2">
        {[40, 70, 45, 90, 65].map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 bg-blue-500 rounded-t"
          />
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Tăng trưởng 12% so với tháng trước.
      </p>
    </div>
  );
};

export default RevenueChart;
