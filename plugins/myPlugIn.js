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
            },
            reloadFunction:(n)=>{

                return setTimeout(()=>{
                    location.reload()
                },n)
            },
            updateFieldValue2 : (fieldName, value,formType) => {
                console.log(value)
                console.log(formType)
                if (formType) {
                    const field = formType.value.find(f => f.name === fieldName);
                    if (field) {
                      field.value = value;
                    }
                  }
              }
        }
    }
})