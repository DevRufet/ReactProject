import React from 'react'
import  { createContext, useState } from "react";
export const MainContext=createContext()
function MainProvider({children}) {
    const [basket, setbasket] = useState([])
    function add(item){
           setbasket(item)
  }
  return (    <> 
    <MainContext.Provider value={{basket,add}}>
        {children}
    </MainContext.Provider>
    </>
    
  )
}

export default MainProvider