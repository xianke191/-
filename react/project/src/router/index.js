import React from "react"
import  { createBrowserRouter,Navigate}  from "react-router-dom"
import Login from "../pages/Login"

import App from "../App"


// const Islogin=(props)=>{
   
//    let Com =props.children.type 
//    return  sessionStorage.getItem("token")? <Com></Com>:<Navigate to="/login"></Navigate>
   
// }
const router = createBrowserRouter([
    // {path:"/app",element:<App></App>,children:[
    //     {path:"/app/shou",element:<Shou></Shou>,
    //     children:[
    //         {path:"/app/shou/shen",element:<Islogin><Shen></Shen></Islogin>},
    //         {path:"/app/shou/he",element:<Islogin><He></He></Islogin>}
    //     ]
    // },
    //     {path:"/app",element:<Navigate to="/app/shou"></Navigate>}
    // ]},
    {path:"/",element:<App></App>},
    {path:"/login",element:<Login></Login>},
    
])

export  default  router