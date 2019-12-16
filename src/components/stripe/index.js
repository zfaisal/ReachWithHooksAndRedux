import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import { MDBDataTable, MDBIcon ,MDBTableBody,MDBTable, MDBTableHead, MDBInput} from 'mdbreact';
import * as $ from 'jquery'
import { Button } from 'react-bootstrap';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as _ from 'underscore'

import ReactDataSheet from 'react-datasheet'

import './index.css'
import StripeCheckout from 'react-stripe-checkout';

function Stripe(props) {

   
const [publicKey, setPublicKey] = useState("pk_test_Qh7AxPu6Qmc3nLagahgoXvJ500waid9UFB")
    
    
var onToken = (token) => {
  console.log(token)
}

var onOpened = () => {
  alert("ok")
  console.log("info")
}
//.Header-purchaseDescription 
    return (
        
         <div>
           
           <StripeCheckout 
             token={onToken}
             onOpened={onOpened}
             ComponentClass="div"
             stripeKey={publicKey}
             billingAddress
             shippingAddress
            
             name="Three Comma Co." // the pop-in header title
             description="Big Data Stuff" // the pop-in header subtitle
             panelLabel="Pay now"
           />
         </div>
            

    
        
    );
}




export default Stripe
