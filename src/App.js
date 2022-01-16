import { BrowserRouter,Route,Routes } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import Home from "./components/Home"
import WaitingPage from "./components/WaitingPage"
import checkTab from './utilites/checkTab'
import { ToastContainer } from 'react-toastify';

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
        <BrowserRouter>
        <Routes>
            
            <Route path="/" index element={<Home auth={auth} setAuth={setAuth} setShowModal={setShowModal} otherTab={otherTab} showModal={showModal}/>} />
            <Route path="/waiting/:id" element={<WaitingPage />} />

        </Routes>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </BrowserRouter>
    )
}

export default App
