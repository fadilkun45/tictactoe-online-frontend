import { BrowserRouter,Route,Routes } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Home from "./components/Home"
import WaitingPage from "./components/WaitingPage"
import checkTab from './utilites/checkTab'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Playing from "./components/Playing"

const App = () => {
    let [auth,setAuth] = useState(false)
    let [showModal,setShowModal] = useState(true)
    let [otherTab,setOtherTab] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            console.log('true')
            setAuth(true)
            setShowModal(false)
           if(!checkTab()){
            setOtherTab(false)
           }else{
            setOtherTab(true)
           }
        }
    },[])


    return (
     <>
        <BrowserRouter>
        <Routes>
            
            <Route path="/" index element={<Home auth={auth} setAuth={setAuth} setShowModal={setShowModal} otherTab={otherTab} showModal={showModal}/>} />
            <Route path="/waiting/:id" element={<WaitingPage />} />
            <Route path='/playing/:id' element={<Playing />} />

        </Routes>
        </BrowserRouter>

        <ToastContainer />
     </>
    )
}

export default App
