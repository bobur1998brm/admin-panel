const createProduct = (state=[],action)=>{
    switch(action.type){
        case "CREATE_PRODUCT":
            return state = [...state, action.payload]
        default:
            return state
    }
}

export default createProduct;
