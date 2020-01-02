import React, {Fragment, PureComponent, useState, useEffect} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import * as _ from 'underscore';
import TextField from '@material-ui/core/TextField';
import { saveUserInfo } from '../../store/search/Actions';
import { css } from "@emotion/core";
import { ClipLoader,BarLoader, FadeLoader } from "react-spinners";
import Notifications, {notify} from 'react-notify-toast';


import './index.css'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  top: 60%;
  left: 50%;
`;


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

    const [loading, setLoading] = useState(false);
    const [userInfoResponse, setUserInfoResponse] = useState({});
  
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
            if(val.indexOf('@') < 0 || val.indexOf('.') < 0)
            {
                validationTextObj[property] = "Please enter a valid email address";
            }
        }
        else if(property == "zip")
        {
            if(val.trim().length != 5)
            {
                validationTextObj[property] = "zip code should have 5 digits";
            }
        }

        setValidation(validationTextObj);
        
    }


    function saveUserInfo() {
        
        var disabledButton = validationText['firstName'].trim().length > 0 || validationText['lastName'].trim().length > 0 ||
                            validationText['email'].trim().length > 0 || validationText['phone'].trim().length > 0 ||
                            validationText['zip'].trim().length > 0

       if(!disabledButton) {
         disabledButton = userInfo['firstName'].trim().length == 0 || userInfo['lastName'].trim().length == 0 ||
                        userInfo['email'].trim().length == 0 || userInfo['phone'].trim().length == 0 ||
                        userInfo['zip'].trim().length == 0
       }

       if(disabledButton)
       {
        notify.show('Please properly input all info before submission',"error", 4000);   
        
       }
       else
       {
        props.saveUserInfo(userInfo)
       }
    }

    useEffect(() => {

        if(props.userInfoResponse.result) 
        {
            setUserInfoResponse(props.userInfoResponse)
            setLoading(true);
            setTimeout(() => {
                setUserInfoResponse({});
            }, 1000);
        }

        
    }, [props.userInfoResponse])

    useEffect(() => {

        if(userInfoResponse.result) 
        {
            setUserInfo({
                firstName: '',
                lastName: '', 
                email: '',
                phone: '',
                zip: ''
            })

            notify.show('Thank you! Your request has been submitted!',"success", 4000);
        }
        else
        {
            setLoading(false);
            
        }
    }, [userInfoResponse])


    return (
           
        <form className="form-userdata"  
                // style={{backgroundImage: "url('https://chinadialogue-production.s3.amazonaws.com/uploads/content/image/11575/K79982_web.jpg')"}} 
             noValidate 
             autoComplete="off">
           
            <Notifications options={{top: "50%"}} />
           
            
             <FadeLoader	
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            />
            <h4>Interested? Request a quote below!!</h4>
            <TextField style={{width: "300px"}} 
                        label="First Name" 
                        onChange={(e) => onTextChange(e, 'firstName')}
                        onBlur={(e) => onBlur(e, 'firstName')} 
                        helperText={validationText['firstName']}
                        error={validationText['firstName'].trim().length > 0}
                        value={userInfo.firstName}
            />
            <br />
            <br />
            <TextField style={{width: "300px"}}  
                       label="Last Name" 
                       onChange={(e) => onTextChange(e, 'lastName')}
                       onBlur={(e) => onBlur(e, 'lastName')} 
                       helperText={validationText['lastName']}
                       error={validationText['lastName'].trim().length > 0}
                       value={userInfo.lastName}
            />
            <br />
            <br />
            <TextField style={{width: "300px"}}  
                       label="Email address" 
                       onChange={(e) => onTextChange(e, 'email')}
                       onBlur={(e) => onBlur(e, 'email')} 
                       helperText={validationText['email']}
                       error={validationText['email'].trim().length > 0}
                       value={userInfo.email}
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
                       value={userInfo.phone}
                       
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
                       value={userInfo.zip}
                       
            />
            <br />
            <br />
            <input className="btn btn-info" 
                    type="button" 
                    variant="contained" 
                    color="primary" 
                    value="Request Info"
                    onClick={saveUserInfo}
                    disabled={false}
                    
                    />
         
           
          </form>
        );
    
}






export default UserForm;
