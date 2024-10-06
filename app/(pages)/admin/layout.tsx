import SideBar from '@/components/admi/SideBar';
import TopBar from '@/components/admi/TopBar';



export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* Topbar Part */}
      <TopBar/>
      <div className="flex">
        {/*  Sidebar Part */}
        <SideBar/>
        <div className="flex-1  bg-gray-100 dark:bg-gray-800 ">
          {/*  main Part */}
            {children}
        </div>
      </div>
    </div>
  )
}
