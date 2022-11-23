
const Reducer = (state,action) => {
    switch(action.type){
        case "dataloading":
            return{
                ...state,
                apiloading:true,
            };
            case "data-geting":
                return{
                    ...state,
                    apidata:action.payload,
                    apiloading:false
                };
            case "api-error":
                return{
                    ...state,
                    apierror:true
                }

        default:
            return state
    }

}

export default Reducer