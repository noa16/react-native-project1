
const initialState={

    password:'',
    username:'',
    error:'',
    isError:"",
    isSignupe:false,
    foundUser:false,
    isLogin:false,
   


}


const UserReducer=(state = initialState,action)=>{

    switch(action.type){

        case "SET_USER":
            console.log(action.value.password+"from reducer")
            return{
                ...state,
                password:action.value.password,
                username:action.value.username
            }

        case "SET_ERROR":


        case "EEROR_VALID_USER":
            return{
                ...state,
                error:"not valid user!",
                isLogin:false
                
            }
        case "SIGN_UP_USER":
            return{
                ...state,
                isSignupe:true,
                username:action.value.username,
                password:action.value.password
            }
        case 'CHECK_USER':
            return{
                ...state,
                isLogin:true
                
            }
        case 'CHECK_USER_SIGNUP':
            return{
                ...state,
                foundUser:action.value.isFound
            }
        


        default:
            return{...state}
    }




}

export default UserReducer