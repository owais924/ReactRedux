import actions from "./actions";
const {creatorAction}=actions;

 const creator = (values) => {


    return async dispatch => {
      try {
        dispatch(creatorAction(values)) ;
        
      } catch (err) {
   
      }
      
    };
    
};


export {creator};