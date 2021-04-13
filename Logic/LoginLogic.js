export const cheackValidity = (text,label) => {
  

    console.log("dfhbfdh")
    console.log(label)
    switch(label){
        case'username':
             console.log("username")
            if(text.length===0){
               
                   return{
                     
                     
                     isValidUserName:false
                   }
            }
            return{
                isValidUserName:true
            }

        
        case'password':
             console.log("password"+text)
            if(text.length===0||text.length<5){

                return{
                     
                     isValidPassword:false,
                     isValidUserName:false,
                     error:'password length error'
                   }
            }
            return{isValidPassword:true,error:''}
            

        default:
            console.log("default")
            return{
                  isValidPassword:false,
                     isValidUserName:false

            }



  


    }


   

    
    
  };


  

  


