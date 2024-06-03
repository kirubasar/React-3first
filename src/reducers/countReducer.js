export const initialState = {
    count:0
}

export const countReducer = (state, action) => {
    //console.log(state);
   //console.log(action);
   //return {count: state.count +1}

   if(action.type=='Increment'){
    return{count: state.count + 1}
   }else if(action.type == 'Decrement'){
    return{count: state.count-1}
   }else {
    return state;
   }
}
