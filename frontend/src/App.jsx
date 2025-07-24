import React, { useEffect } from 'react'
import { Route, Navigate, Routes} from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import LoginPage from './page/LoginPage.jsx'
import HomePage from './page/HomePage.jsx'
import SignUpPage from './page/SignUpPage.jsx'
import { Loader } from 'lucide-react'
import { useAuthStore } from './store/useAuthStore.js'
import Layout from './layout/Layout.jsx'


const App = () => {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-start'>
      <Toaster/>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
          />
        </Route>

        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />

        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        
      </Routes>

    </div>
  )
}

export default App
