import { delay } from "@/lib";
import React from "react";

const UserStats = async () => {
  await delay(2000);

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm border">
      <h3 className="text-lg font-bold mb-2">Thống kê Người dùng</h3>
      <div className="text-3xl font-bold text-green-600">1,234</div>
      <p className="text-sm text-gray-500">Người dùng mới trong tuần này.</p>
    </div>
  );
};

export default UserStats;
