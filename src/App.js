
import './App.css';

import {useSelector,useDispatch} from 'react-redux';
import { creator } from './action/actioncreator';
import { useEffect, useState } from 'react';
import {Table} from 'antd'
import axios from 'axios';
function App() {


  const country =['Pakistan', 'India', 'Iran'];
  
  const [state,setState]=useState({//set state data
    loading:false,
   city:['Karachi', 'Mumbai', 'Tehran'],
    dataSources:[],
  
    
  });
  const {loading,city,dataSources,StudentName,PhoneNumber,StudentAddress,studentData}=state //object literacy of state
 
  
 let categoriesList = useSelector(state => state.dataSource.dataSource);
  //let categoriesList=useSelector((state)=>state.city);
  console.log(categoriesList);

  
  // function getData() {
  //   return dispatch => {
  //     axios.get('https://localhost:7240/api/Catagory/GetAll')
  //     .then(res =>
  //       dispatch({
  //         type: "GET_CATEGORY",
  //         data: res.data
  //       })
  //     );
  //   };
  // }
  // const fetchData=()=>{
    
    
  //    const result= axios.get('https://localhost:7240/api/Catagory/GetAll');
  //     console.log(result.data)
  //     setState({...state,dataSource:result.data.categoriesList})
       
    
 
  // }
  
    // const fetchData=()=>{
    //   dispatch(getData());
    // }
  
  const dispatch=useDispatch();

 
   const  getRedux =async()=>{

    
    const result= await axios.get('https://localhost:7240/api/Catagory/GetAll');
         console.log("RESULT",result.data.catagoriesList[0])
      
      // dispatch(creator(firstObject));
     setState({...state,dataSources:result.data.catagoriesList});
  }
  const columns=[
    {
        title:'studentId',
        dataIndex:'studentId',
        key:'studentId',
    },
    {
        title:'studentName',
        dataIndex:'studentName',
        key:'studentName',
    },
    {
        title:'phoneNumber',
        dataIndex:'phoneNumber',
        key:'phoneNumber',
    },
    {
        title:'studentAddress',
        dataIndex:'studentAddress',
        key:'studentAddress',
    },
    {
        title:'totalRowCount',
        dataIndex:'totalRowCount',
        key:'totalRowCount',
    },

];

  return (
    <div className="App">
     <h1>Welcome</h1>
    
      <div>
      
      <button onClick={()=>dispatch(creator(dataSources))}>send redux data</button>
        <button onClick={getRedux}>getApiData</button>
      </div>
      <h1>Redux:</h1>
      
      <div>
        
        <h1>{dataSources.studentName}</h1>
        <h1>{dataSources.phoneNumber}</h1>
        <h1>{dataSources.studentAddress}</h1>
      </div>
      {/* <h1>redux:{categoriesList}</h1> 
       <h1>state:{dataSources}</h1> */}
        <Table dataSource={dataSources} columns={columns} />
    </div>
    
  );
}

export default App;
