import actions from "../action/actions";
const {
  GET_CATEGORY
 
  } = actions;//object literacy
  
  const ticketState = {
    tickets: [],
    comments: [],
    reminders: [],
    depart: [],
    country: [],
    dataSource: [],
    loading: false,
    error: null,
  };//state set
  

 const categoryReducer = (state=ticketState ,action) => {
    const {type,data}=action;

    switch (type) {
        case GET_CATEGORY:
            return {
                ...state,
                dataSource:data,
                loading: false,
              
            };
       
           default:
            return state;
    }
};

export {categoryReducer};