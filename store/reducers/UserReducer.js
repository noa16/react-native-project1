const initialState={

    password:'',
    username:''


}


const UserReducer=(state = initialState,action)=>{

    switch(action.type){

        case "SET_USER":
            console.log(action.value.password+"from reducer")
            return{
                ...state,
                password:action.password,
                username:action.username
            }

        default:
            return{...state}
    }




}

export default UserReducer