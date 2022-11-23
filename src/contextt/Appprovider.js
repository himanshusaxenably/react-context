// import { createContext, useState ,useContext } from "react";
// const Contextt = createContext();
// const Appprovider = ({ children }) => {
//     const data1 = useContext(Contextt);
//     const data = [
//         {
//             "State": "Uttar Pradesh",
//             "Capital": "Lucknow"
//         },
//         {
//             "State": "Gujarat",
//             "Capital": "Gandhinagar"
//         },
//     ]
//     return (
//         <>
//             <Contextt.Provider value={data}>
//                 {children}
//             </Contextt.Provider>
//         </>
//     )
// }
// export { Appprovider, Contextt };



// custom hook 

import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";
const Contextt = createContext();
const intialvalue={
    apiloading:false,
    apidata:[],
    apierror:false,
}
const Api ="https://jsonplaceholder.typicode.com/posts"
const Appprovider = ({ children }) => {
    const[state,dispatch]=useReducer(reducer,intialvalue);

const apiloading = async(url)=>{
    dispatch({type:"dataloading"})
try{
const response = await axios.get(url);
const result = await response.data;
dispatch({type:"data-geting",payload:result})
}catch(err){
dispatch({type:"api-error"})
}
}

useEffect(()=>{
    apiloading(Api)
},[])

    return (
        <>
            <Contextt.Provider value={{...state}}>
                {children}
            </Contextt.Provider>
        </>
    )
}
const useDb=()=>{
    return useContext(Contextt)
}
export { Appprovider, useDb };





