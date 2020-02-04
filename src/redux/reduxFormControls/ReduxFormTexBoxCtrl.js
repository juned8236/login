import {FormGroup,Row,Col} from 'reactstrap';
import React from 'react'
const ReduxFormTextBoxCtrl=({input, lbl,type,name,meta:{touched,error}})=>{
    return  <FormGroup>
    <Row>
      <Col sm="5" className="text-right">
        <b>{lbl}:</b> 
      </Col>
      <Col sm="3">
        <input {...input} type={type} name={name} className='form-control' />
      </Col>
      <Col sm="4">
            {
                touched && error && <b className="text-danger">{error}</b>
            }
      </Col>
    </Row>
    </FormGroup>

}

export default ReduxFormTextBoxCtrl;