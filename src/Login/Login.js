import React    from "react";
import {Field} from 'redux-form';
import {reduxForm} from 'redux-form';
import store from '../redux/store';
import loginValidation from '../redux/validations/loginValidations';
import ReduxFormTexBoxCtrl from "../redux/reduxFormControls/ReduxFormTexBoxCtrl";

class Login extends React.Component {
  constructor(){
    super();
    this.state={
      msg:''
    }
    // this.fnLogin=this.fnLogin.bind(this);
  }
  fnLogin(dataObj){
    debugger;

    const {uid,pwd} =dataObj;

    let stateObj=store.getState();
    let authObj=stateObj.actionreducer.authObj;

    
    if(uid == authObj.username && pwd == authObj.password){
         store.dispatch({type:'LOGIN_SUCCESS'});
    }else{
         store.dispatch({type:'LOGIN_FAIL'});


    }
    
  }
 
  
  render() {
    const {handleSubmit,invalid,msg} =this.props;
    return <div className="container-fluid">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit(this.fnLogin.bind(this))}>
          <Field lbl="User Name" type='text' name='uid' component={ReduxFormTexBoxCtrl} />
          <Field lbl="Password" type='password' name='pwd' component={ReduxFormTexBoxCtrl} />
          <div className="row">
              <div className="offset-sm-5 col-sm-7">
                <input disabled={this.props.invalid} className="btn btn-danger" type='submit' value="Login" />
              </div>
              <div className="offset-sm-5 col-sm-7">
        {this.state.msg}
     
      </div>
          </div>
        </form>
    </div>
  }
}


Login=reduxForm({
  form:'LoginForm',
  validate:loginValidation,

})(Login)
export default Login;
