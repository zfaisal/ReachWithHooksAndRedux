import React, {Fragment, PureComponent, useState, useEffect} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import * as _ from 'underscore';
import TextField from '@material-ui/core/TextField';

function UserForm(props) {


    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '', 
        email: '',
        phone: '',
        zip: ''
  
      });
  
    const [validationText, setValidation] = useState({
        firstName: '',
        lastName: '', 
        email: '',
        phone: '',
        zip: ''
    });
  
      function onTextChange(e, property) {
        var userInfoClone = _.clone(userInfo);

        userInfoClone[property] = e.target.value;
        setUserInfo(userInfoClone);
        
      }

      function onBlur(e, property) {
        var validationTextObj = _.clone(validationText);
        validationTextObj[property] = "";
        var val = e.target.value;
        if(val.trim().length == 0)
        {
            validationTextObj[property] = "This field cannot be empty";
        }
        else if(property == "email") 
        {
            if(val.indexOf('@') < 0)
            {
                validationTextObj[property] = "Please enter a valid email address";
            }
        }

        setValidation(validationTextObj);
        
    }

        return (
           
        <form  noValidate autoComplete="off">
            <h1>Interested? Please fill in the information and request a quote!!</h1>
            <TextField style={{width: "300px"}} 
                        label="First Name" 
                        onChange={(e) => onTextChange(e, 'firstName')}
                        onBlur={(e) => onBlur(e, 'firstName')} 
                        helperText={validationText['firstName']}
                        error={validationText['firstName'].trim().length > 0}
            />
            <br />
            <br />
            <TextField style={{width: "300px"}}  
                       label="Last Name" 
                       onChange={(e) => onTextChange(e, 'lastName')}
                       onBlur={(e) => onBlur(e, 'lastName')} 
                       helperText={validationText['lastName']}
                       error={validationText['lastName'].trim().length > 0}
            />
            <br />
            <br />
            <TextField style={{width: "300px"}}  
                       label="Email address" 
                       onChange={(e) => onTextChange(e, 'email')}
                       onBlur={(e) => onBlur(e, 'email')} 
                       helperText={validationText['email']}
                       error={validationText['email'].trim().length > 0}
                       
            />
            <br />
            <br />
            <TextField type="number" 
                       style={{width: "300px"}}  
                       label="Phone" 
                       onChange={(e) => onTextChange(e, 'phone')}
                       onBlur={(e) => onBlur(e, 'phone')} 
                       helperText={validationText['phone']}
                       error={validationText['phone'].trim().length > 0}
            />
            <br />
            <br />
            <TextField type="number" 
                       style={{width: "300px"}}  
                       label="zip" 
                       onChange={(e) => onTextChange(e, 'zip')}
                       onBlur={(e) => onBlur(e, 'zip')} 
                       helperText={validationText['zip']}
                       error={validationText['zip'].trim().length > 0}
            />
            <br />
            <br />
            <input className="btn btn-info" type="submit" variant="contained" color="primary" value="Request info"/>
         
          </form>
        );
    
}






export default UserForm;
