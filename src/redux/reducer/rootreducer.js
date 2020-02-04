import actionreducer from './actionreducer';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form'
const rootreducer=combineReducers({actionreducer,form});

export default rootreducer;