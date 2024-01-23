export default defineNuxtPlugin((nuxtApp)=>{
    return{
        provide:{
            randomNumber:(n)=>{
                return Math.floor(Math.random()*n+1)
            },
            checkInputFeild:(formData)=>{
                return Object.values(formData).every((value) => {
                return value !== ''
                });
                
            }
        }
    }
})