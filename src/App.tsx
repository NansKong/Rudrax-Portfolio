import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Certifications from './components/pages/Certifications'

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/certifications" element={<Certifications />} />
        </Routes>
    )
}

export default App
