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


import ReactDataSheet from 'react-datasheet'
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './index.css'

import SiteCarousal from '../../components/Carousal';
import UserForm from '../../components/UserForm';


function Home(props) {

    

    return (
        <div>
         <Grid container spacing={3}>
          <Grid item xs={12}>
            <SiteCarousal />
          </Grid>
          <Grid item xs={12}>
         
            <UserForm />
         
          </Grid>
         
        </Grid>
        </div>
        
        
    );
}




export default Home
