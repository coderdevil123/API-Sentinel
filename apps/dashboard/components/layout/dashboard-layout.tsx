import Sidebar
from "./sidebar";

import Topbar
from "./topbar";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (

    <div
      className="
      flex
      bg-black
      text-white
      "
    >

      <Sidebar />

      <div
        className="
        flex-1
        "
      >

        <Topbar />

        <main
          className="
          p-6
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}