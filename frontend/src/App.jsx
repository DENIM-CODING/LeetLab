import React from 'react'
import { Route, Navigate, Routes} from "react-router-dom"
import LoginPage from './page/LoginPage.jsx'
import HomePage from './page/HomePage.jsx'
import SignUpPage from './page/SignUpPage.jsx'

const App = () => {

  let authUser = null;

  return (
    <div className='flex flex-col items-center justify-start'>
      <Routes>
        <Route
        path='/'
        element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
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
