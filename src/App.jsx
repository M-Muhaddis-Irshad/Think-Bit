import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Quiz from './Pages/Quiz.jsx'
import { Result } from 'antd'
import NotFound from './Pages/NotFound/NotFound.jsx'
import LandingPage from './Pages/LandingPage.jsx'

const App = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
            
                <Route index element={<LandingPage />} />
                <Route path='start' element={<Home />} />
                <Route path='quiz/:category' element={<Quiz />} />
                <Route path='result' element={<Result />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}

export default App