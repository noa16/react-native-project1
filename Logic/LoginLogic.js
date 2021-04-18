export const cheackValidity = (username,password) => {
   
            if(username.length===0){
                   return{
                     isValidUserName:false,
                     error:"username is required"
                   }
            }
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(emailRegex.test(username)===false){
                return{
                    isValidUserName:false,
                    error:"not a valid email"
                }

            }
            if(password.length===0||password.length<5){

                return{
                     isValidPassword:false,
                     error:'password length error'
                   }
            }
            return{isValidform:true,error:'',username,password}
            

  

            }



  


    


   

    
    
  


 

  

  


