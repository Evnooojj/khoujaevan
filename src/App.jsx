import { Routes, Route, useLocation } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CV from './pages/CV'
import Contact from './pages/Contact'

function App() {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="cv" element={<CV />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default App
