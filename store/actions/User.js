export const CHECK_USER="CHECK_USER";
export const SET_USER="SET_USER"
export const SHOW_PURCHASES="SHOW_PURCHASES"


export const setUser = (username,password)=>{

    return{
        type:SET_USER,
        value:{username,password}
    }


}

export const userPurchases = (username)=>{



}

export const checkValidUser = (username,password)=>{
    
}