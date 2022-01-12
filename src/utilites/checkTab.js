import React from 'react'

const checkTab = () => {
    let checkstorage = localStorage.getItem('tes')
    console.log(checkstorage)

    if(localStorage > 2){
        window.addEventListener('beforeunload',() => {
            localStorage.setItem('tes',1)
        })   
    }
    
    if(checkstorage > 0 ){
     return true  
    }else{
     localStorage.setItem('tes',1)
    }


    window.addEventListener('beforeunload',() => {
        localStorage.setItem('tes',0)
    })

   
}

export default checkTab
