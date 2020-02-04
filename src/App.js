import React from 'react';
import Login from './Login/index';
import Dashboard from "./Dashboard/index"
import {connect} from 'react-redux'

class App extends React.Component {
    render() {
        const {isLoggedIn} =this.props;

        return <div >
               {
            isLoggedIn ? <Dashboard /> : <Login />
                } 
                </div>
    }
}

const mapStateToProps=(state)=>{
    return {
        'isLoggedIn':state.actionreducer.isLoggedIn
    }
}
export default connect(mapStateToProps)(App);