export const CHECK_USER="CHECK_USER";
export const SET_USER="SET_USER"
export const SHOW_PURCHASES="SHOW_PURCHASES"
export const EEROR_VALID_USER="EEROR_VALID_USER"
export const SIGN_UP_USER="SIGN_UP_USER"
export const CHECK_USER_SIGNUP="CHECK_USER_SIGNUP"
export const GET_PURCHASES ="GET_PURCHASES"

export const setUser = (username,password)=>{

    return{
        type:SET_USER,
        value:{username,password}
    }


}


export const checkValidUserSignUp = (username)=>{
    return async(dispatch)=>{
        const res=await fetch("https://activityproject-45767.firebaseio.com/users.json")
        const resData = await res.json();
        Object.values(resData).map((obj)=>{

            console.log(obj.email+username)
            if(obj.email===username){
                dispatch({type:CHECK_USER_SIGNUP,value:{isFound:true}})

            }
            else{
                dispatch({type:CHECK_USER_SIGNUP,value:{isFound:false}})
            }

        })



    }

}





export const checkValidUser = (username,password)=>{
    console.log("check user")
    return async(dispatch)=>{
        try{
             const res=await fetch("https://activityproject-45767.firebaseio.com/users.json")
            const resData = await res.json();
            Object.values(resData).map(obj=>{
                console.log(obj.email+username+"hhhhhhhhhhhhh")
                if(obj.email===username){
                     console.log("suucess")
                     dispatch({
                type:CHECK_USER,
                value:resData
            })
           
                }

                else{
                    dispatch({
                        type:EEROR_VALID_USER
                    })
                    
                }
            })
           


        }
        catch(e){
            console.log(e+"errorrrrrr")

        }
    }

    
    
}

export const UsersignUp = (username,password)=>{
    return async(dispatch)=>{
        try{

             const response = await fetch(
        "https://activityproject-45767.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email:username,
            password
          }),
        }
      );

        dispatch({type:SIGN_UP_USER,value:{username,password}})
        }
        catch(e){
            throw e
        }

    }
}

