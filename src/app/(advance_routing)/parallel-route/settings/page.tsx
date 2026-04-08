import { delay } from "@/lib";

const SystemPage = async () => {
  await delay(1000);
  return (
    <div className="col-span-2 p-10 bg-gray-50 rounded-xl text-center border-dashed border-2">
      <p className="text-gray-500">Hệ thống vận hành</p>
    </div>
  );
};

export default SystemPage;
