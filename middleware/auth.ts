
import {enteredColor} from "../stores/myStore"
export default defineNuxtRouteMiddleware((to,from)=>{

    const checkColor = enteredColor()
    if(checkColor.userColor){
        return navigateTo("/color-verification")
    }
})