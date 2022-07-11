import { useReducer } from "react";

const reducer= (state,action) =>{
    return{
        ...state,
        [action.name] : action.value,    
    };
};
const useInputs = (initState) => {
    const [state,dispatch] = useReducer(reducer,initState);
    const onChange = (e) => {
        dispatch(e.target.value);
    };
    return [state,onChange];
};

export default useInputs;

















