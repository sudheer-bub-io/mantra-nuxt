// import {isSign} from "../stores/myStore"
// const isSigned = isSign();
// console.log(isSigned.userSigned +" from MiddleWare ")

// export default defineNuxtRouteMiddleware((to,from)=>{
//     const myvalue = true;
//     if(myvalue){
//         console.log("I am from mideleware called from logn and value is ")
//         return navigateTo("/register")
//     }
// })
import {enteredColor} from "../stores/myStore"
export default defineNuxtRouteMiddleware((to,from)=>{

    const checkColor = enteredColor()
    console.log(checkColor)
    if(checkColor.userColor){
        console.log("I am from mideleware called from logn and value is ")
        return navigateTo("/color-verification")
    }
})