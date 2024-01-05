import Navbar from '@/components/Navbar'
// import { Sidebar } from '@/components/SideBar'
import { Sidebar2 } from '@/components/SideBar2.0'

export default function Home() {
  return (
    <div className="grid lg:grid-cols-6">
      <Sidebar2 />
      <div className="col-span-3 lg:col-span-5 lg:border-l">
        <div className="h-full px-2 py-6 lg:px-2">
          <h1 className='flex items-center justify-center h-[80vh] text-forground text-3xl' >App</h1>
        </div>
      </div>
    </div>
  )
}
