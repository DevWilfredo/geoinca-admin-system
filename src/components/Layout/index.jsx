import { Outlet } from 'react-router'
import NavbarComponent from '../Navbar'
import SidebarComponent from '../Sidebar'

const Layout = () => {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div className="p-4 md:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet/>
        </div>
      </div>
    </>

  )
}

export default Layout