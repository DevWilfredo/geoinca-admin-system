import { CalendarDays, Car, ClipboardList, FileSearch, FileText, LayoutDashboard, User, Wallet } from "lucide-react";
import { NavLink } from "react-router";

const NavItems = [
    { link: '/', text: 'Dashboard', icon: LayoutDashboard },
    { link: '/perfil', text: 'Perfil', icon: User },
    { link: '/gastos', text: 'Gastos', icon: Wallet },
    { link: '/nominas', text: 'Consultas de Nomina', icon: FileSearch },
    { link: '/incidentes', text: 'Incidentes de Vehículo', icon: Car },
    { link: '/diasLibres', text: 'Días Libres/Vacaciones', icon: CalendarDays },
    { link: '/documentacion', text: 'Documentación Laboral', icon: FileText },
    { link: '/solicitudes', text: 'Solicitudes Generales', icon: ClipboardList },
];

const NavbarComponent = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <div className="drawer">
                            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Navbar */}
                                <div className="navbarw-full">
                                    <div className="flex lg:hidden md:hidden justify-center">
                                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn cursor-pointer hover:bg-base-300 btn-square transition-all">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="inline-block h-6 w-6 stroke-current"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                    {NavItems.map(({ link, text, icon: Icon }, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={link}
                                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            >
                                                <Icon className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                                                <span className="ms-3">{text}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <a href="" className="flex ms-2 md:me-24">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Geoinca</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div className="dropdown dropdown-end">
                                <div className="avatar" tabIndex={0} role="button">
                                    <div className="w-12 rounded-full">
                                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Profile</a></li>
                                    <li><a>Settings</a></li>
                                    <li><a>Log out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent