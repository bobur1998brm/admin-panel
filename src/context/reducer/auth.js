const auth = (state = false, action)=>{
    switch(action.type){
        case "REGISTER_PHONE":
            return state = action.payload
        default:
            return state
    }
}

export default auth;
