import {initVals} from "../utils/initVals";
const actionreducer=(state=initVals,action)=>{
       switch(action.type){
           case 'LOGIN_SUCCESS':
              return state={
                   isLoggedIn:true
               }
           break;
           case 'LOGIN_FAIL':
             return   undefined;       // <--- blow away form data
             default:
               return state;
           break;

       }
     return state;  
}

export default actionreducer;