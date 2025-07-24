import React from 'react'
import { Route, Navigator, Routes} from "react-router-dom"

const App = () => {
  return (
    <div className='flex flex-col items-center justify-start'>
      <Routes>
        <Route
        path='/'
        element={<HomePage/>}
        />
        <Route
        path='/login'
        element={<LoginPage/>}
        />
        <Route
        path='/signup'
        element={<SignUpPage/>}
        />
      </Routes>

    </div>
  )
}

export default App
