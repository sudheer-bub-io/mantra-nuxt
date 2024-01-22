export default defineNuxtPlugin((nuxtApp)=>{
    return{
        provide:{
            randomNumber:(n)=>{
                return Math.floor(Math.random()*n+1)
            },
            checkInputFeild:(formData)=>{
                console.log(formData)
                return Object.values(formData).every((value) => {
                    console.log(typeof(value));
                return value !== ''
                });
                
            }
        }
    }
})