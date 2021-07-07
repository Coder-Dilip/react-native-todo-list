 
 
 export const incNumber=(num)=>{
    return {
        type:'INCREMENT',
        payload:num
    }
}


export const store_password=(username, password)=>{
return {
    type:'user-info', 
usernames:username,
passwords:password

}
}


export const decNumber=()=>{
    return {
        type:'DECREMENT'
    }
}


export const squareNumber=(num)=>{
    return {
        type:'SQUARE',
        payload:num
    }
}