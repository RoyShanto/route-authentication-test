import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Profile from './components/Profile/Profile.jsx'
import Registration from './components/Registration/Registration.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import PrivateRoutes from './Routes/PrivateRoutes.jsx'
import History from './components/History/History.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile" element={<PrivateRoutes> <Profile /> </PrivateRoutes> } />
            <Route path="history" element={<PrivateRoutes> <History /> </PrivateRoutes> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
