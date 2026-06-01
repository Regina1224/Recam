import { useState } from "react";
import type { Order } from "../../types/order";
import { Camera, LayoutDashboard, Video, Globe, FileText } from "lucide-react";

{
  /* 假数据 */
}
const mockOrders: Order[] = [
  {
    orderNumber: "000-000-000-001",
    orderDate: "10 November 2026",
    orderState: "Scheduled",
    orderAddress: "93 Beach Road, North Bondi, NSW, 2026",
    serviceType: ["Photography", "Floor Plan", "Videography", "VR Tour"],
  },
  {
    orderNumber: "000-000-000-002",
    orderDate: "10 November 2026",
    orderState: "Delivered",
    orderAddress: "93 Beach Road, North Bondi, NSW, 2026",
    serviceType: ["Photography", "Floor Plan", "Videography"],
  },
];

{
  /* 四种状态 */
}
const setStateBadgeClass = (state: string) => {
  switch (state) {
    case "Scheduled":
      return "bg-blue-400 text-white";
    case "Delivered":
      return "bg-green-400 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

{
  /* 不同服务的图标 */
}
const getServiceIcon = (service: string) => {
  switch (service) {
    case "Photography":
      return <Camera className="w-3 h-3 mr-1" />;
    case "Floor Plan":
      return <LayoutDashboard className="w-3 h-3 mr-1" />;
    case "Videography":
      return <Video className="w-3 h-3 mr-1" />;
    case "VR Tour":
      return <Globe className="w-3 h-3 mr-1" />;
    default:
      return null;
  }
};


const MyOrderPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredOrders =
    activeFilter === "All"
      ? mockOrders
      : mockOrders.filter((order) => order.orderState === activeFilter);

  return (
    <div className="flex p-6">
      {/* 左侧边栏 */}
      <aside className="w-48 flex flex-col gap-2 mr-6">
        <button
          className={`w-full text-center px-4 py-2 rounded-lg outline-none hover:bg-gray-200 transition-colors ${activeFilter === "All" ? "bg-gray-200 font-medium" : ""}`}
          onClick={() => setActiveFilter("All")}
        >
          All
        </button>
        <button
          className={`w-full text-center px-4 py-2 rounded-lg outline-none hover:bg-gray-200 transition-colors ${activeFilter === "Scheduled" ? "bg-gray-200 font-medium" : ""}`}
          onClick={() => setActiveFilter("Scheduled")}
        >
          Scheduled
        </button>
        <button
          className={`w-full text-center px-4 py-2 rounded-lg outline-none hover:bg-gray-200 transition-colors ${activeFilter === "Delivered" ? "bg-gray-200 font-medium" : ""}`}
          onClick={() => setActiveFilter("Delivered")}
        >
          Delivered
        </button>
      </aside>


      {/* 右侧订单列 */}
      <section className="flex-1">
        {filteredOrders.map((order) => (
          <div
            key={order.orderNumber}
            className="relative bg-white rounded-xl p-6 mb-4 shadow-sm border border-transparent hover:border-blue-400 transition-colors cursor-pointer"
          >
            {/* 标签Scheduled Delivered */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-md text-sm font-medium ${setStateBadgeClass(order.orderState)}`}
            >
              {order.orderState}
            </span>
            {/* 顶部订单号和日期 */}
            <div>
              <p className="text-sm text-gray-500">
                Order # {order.orderNumber}
              </p>
              <p className="text-xs text-gray-400">
                Ordered on {order.orderDate}
              </p>
            </div>
            <hr className="my-3 border-gray-100" />

            {/* 中间地址 */}
            <p className="text-xl font-semibold py-3">{order.orderAddress}</p>
            {/* 服务类型 */}
            <div>
              {order.serviceType.map((service) => (
                <span
                  key={service}
                  className=" bg-gray-100 text-gray-600 px-3 py-1 text-sm mr-2 rounded-md flex items-center inline-flex"
                >
                  {getServiceIcon(service)}
                  {service}
                </span>
              ))}
            </div>
            {/* 链接 */}
            <div className="flex justify-end mt-4">
              <button className="text-sm text-gray-400">
                View order details »
              </button>
            </div>

            {/* Invoice & Property Website */}
            {order.orderState === "Delivered" && (
              <div>
                <hr className="my-3 border-gray-100" />
                <div className="flex justify-end gap-3 mt-4">
                  <button className="border border-gray-300 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Invoice
                  </button>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Property Website
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyOrderPage;
