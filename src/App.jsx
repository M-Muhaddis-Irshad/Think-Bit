import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Category from './Pages/Category.jsx'
import Quiz from './Pages/Quiz.jsx'
import { Result } from 'antd'
import NotFound from './Pages/NotFound/NotFound.jsx'
import Home from './Pages/Home.jsx'

const App = () => {

    return (
        <Routes>
            <Route element={<Layout />}>

                <Route index element={<Home />} />
                <Route path='start' element={<Category />} />
                <Route path='quiz/:category' element={<Quiz />} />
                <Route path='result' element={<Result />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )

}

export default App