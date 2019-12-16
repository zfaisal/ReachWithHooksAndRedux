import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import * as $ from 'jquery'
import { Button } from 'react-bootstrap';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as _ from 'underscore'

import ReactDataSheet from 'react-datasheet'

import './index.css'

function EditRow(props) {

  const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

  const data = [
    ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
    ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
    ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
    ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
  ];
  

    function handleChange(row, cell, i)
    {
      console.log(row, cell, i)
    }

    return (
        
   
      props.rows.map(row => {
        
        return (
          <tr>
             {row.map((cell, i) => {
               return <td key={i}><input key={i} type='text' value={cell} onChange="handleChange(row, cell, i)" /></td>
             })}
          </tr>
         )
      })
     
            
    );
}




export default EditRow
