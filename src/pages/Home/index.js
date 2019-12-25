import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import { MDBDataTable, MDBIcon ,MDBTableBody,MDBTable, MDBTableHead, MDBInput} from 'mdbreact';
import * as $ from 'jquery'
// import { Button } from 'react-bootstrap';
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as _ from 'underscore'

import ReactDataSheet from 'react-datasheet'
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import SiteCarousal from '../../components/Carousal';
import Form from 'react-bootstrap/FormControl';

import TextField from '@material-ui/core/TextField';
import { Card } from '@material-ui/core';


function Home(props) {

    const [userInfo, setUserInfo] = useState({
      firstName: '',
      lastName: '', 
      middleName: '',
      email: '',
      phone: ''

    })

    function onTextChange(e, property) {
      console.log(e.target.value) 
      
    }

    return (
        <div>
         <Grid container spacing={3}>
          <Grid item xs={12}>
            <SiteCarousal />
          </Grid>
          <Grid item xs={12}>
          <form  noValidate autoComplete="off">
            <h1>Interested? Please fill the infrmatkon below and request a quote!!</h1>
            <TextField style={{width: "300px"}}  label="First Name" onChange={(e) => onTextChange(e, 'firstName')}/>
            <br />
            <TextField style={{width: "300px"}}  label="Middle Name" />
            <br />
            <TextField style={{width: "300px"}}  label="Last Name" />
            <br />
            <TextField style={{width: "300px"}}  label="Email address" />
            <br />
            <TextField style={{width: "300px"}}  label="Phone" />
            <br />
            <br />
            <input className="btn btn-info" type="submit" variant="contained" color="primary" value="Request info"/>
         
          </form>
          
         
          </Grid>
         
        </Grid>
        </div>
        
        
    );
}




export default Home
