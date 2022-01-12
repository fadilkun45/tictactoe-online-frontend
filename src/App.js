import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
   


    return (
        <BrowserRouter>
        <Routes>
            
            <Route path="/" index element={<Home />} />
            

        </Routes>
        </BrowserRouter>
    )
}

export default App
