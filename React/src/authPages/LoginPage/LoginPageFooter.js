import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useHistory} from "react-router-dom"
import {Tooltip} from '@mui/material';


const LoginPageFooter = ({handleLogin,isFormValid}) => {
  
  const history=useHistory();
  const handlePushToRegisterPage = () =>
  {
    console.log("sex");
    history.push('/register');
  };
  
  const getFormNotValidMessage=()=>{
    return('Enter valid credentials')
  }
  const getFormValidMessage=()=>{
    return('Press to Login')
  }
  
  
  return (
    <>
   <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
    <div>
      <CustomPrimaryButton
      label='Log In'
      additionalStyles={{marginTop:'30px'}}
      disabled={!isFormValid}
      onClick={handleLogin}>

      </CustomPrimaryButton>
    </div>
    </Tooltip>
    <RedirectInfo 
      text="Need an account? "
      redirectText="Create account"
      additionalStyles={{marginTop:'5px'}}
      redirectHandler={handlePushToRegisterPage}
    />
    </>
  );
};

export default LoginPageFooter;
