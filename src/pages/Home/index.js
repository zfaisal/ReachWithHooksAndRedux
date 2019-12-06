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

const url = "http://vegeta-001-site1.itempurl.com";

function Home(props) {

      
    const [players, setPlayers] = useState([]);
    const [loader, setLoader] = useState(1);

    useEffect(() => {

      if(loader == 1)
        getAllOlayers();


    }, [loader])
   
    var getAllOlayers = function() {
       $.get({
         url: url + "/api/players",
         type: 'GET',
         ataType: 'json', 
         success: function(response) {
           console.log("response", response)
           setPlayers(response.AllPlayers)
           setLoader(2)
         },
         error: function(xhr, ajaxOptions, thrownError) {
           
         }
       })
    }


    return (
        <div>
          {players.length}
        </div>
        
    );
}




export default Home
