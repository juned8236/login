const loginValidation=(data)=>{
    var error={};

    if(!data.uid){
        error.uid="Please enter uid";
    }

    if(!data.pwd){
        error.pwd="Please enter Password";
    }
    return error;
}

export default loginValidation;
