import Layout from './components/Layout'
import {Route, Routes} from 'react-router'
import Profile from './pages/Profile'
import Dashboard from './pages/Dasbhoard'
import Bills from './pages/Bills'
import Payroll from './pages/Payroll'
import Incidents from './pages/Incidents'
import DayOff from './pages/DayOff'
import Documentation from './pages/Documentation'
import Requests from './pages/Requests'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Dashboard />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/gastos' element={<Bills />} />
        <Route path='/nominas' element={<Payroll />} />
        <Route path='/incidentes' element={<Incidents />} />
        <Route path='/diasLibres' element={<DayOff />} />
        <Route path='/documentacion' element={<Documentation />} />
        <Route path='/solicitudes' element={<Requests />} />
      </Route>
    </Routes>

  )
}