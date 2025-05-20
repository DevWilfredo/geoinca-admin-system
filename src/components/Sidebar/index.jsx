import {
    LayoutDashboard,
    User,
    Wallet,
    FileSearch,
    Car,
    CalendarDays,
    FileText,
    ClipboardList,
} from "lucide-react";
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

const SidebarComponent = () => {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {NavItems.map(({ link, text, icon: Icon }, index) => (
                        <li key={index}>
                            <NavLink
                                to={link}
                                className={({ isActive }) =>
                                    `flex items-center p-2 rounded-lg group transition-colors ${isActive
                                        ? 'bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white'
                                        : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon
                                            className={`w-5 h-5 transition-colors ${isActive
                                                    ? 'text-blue-600 dark:text-white'
                                                    : 'text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                                                }`}
                                        />
                                        <span className="ms-3">{text}</span>
                                    </>
                                )}
                            </NavLink>


                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SidebarComponent;
