import React    from "react";
import template from "./Dashboard.jsx";
import {connect} from 'react-redux'
// import { store} from "react-redux"
import store from '../redux/store';
class Dashboard extends React.Component {
  constructor(){
    super();
    this.state={
      headers:['ID','NAME','AGE','GENDER','EMAIL','PHONENO.'],
      keys:['id','name','age','gender','email','phone'],
      data:[]
    }
  }
  render() {
    return template.call(this);
  }

}

const mapStateToProps=(state)=>{
  return {
     data:Object.keys(state.actionreducer.data.user).reduce((data, key) => {
      return [...data, {key: state.actionreducer.data.user[key]}]
    }, [])

  }
}

export default connect(mapStateToProps)(Dashboard) ;

