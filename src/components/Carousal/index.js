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
import Carousel from 'react-bootstrap/Carousel'
import './index.css'

function SiteCarousal(props) {

    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };   

    return (
        
     <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://es-cms-prod.s3.amazonaws.com/filer/74/05/740511e0-a969-411f-8321-a6cc8f1faddd/01_how-to-save-energy-costs-.png"
                alt="First slide"
                style={{height:"180px"}}
              />
              <Carousel.Caption>
                <h3>Save on Electric Bills</h3>
             
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.homeinsulations.co.za/wp-content/uploads/2016/12/advantages-of-solar-energy-in-south-africa-1024x1024.jpg"
                alt="First slide"
                style={{height:"180px"}}
              />
              <Carousel.Caption>
                <h3>Use solar energy to power your home</h3>
              
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.roofkingnc.com/wp-content/uploads/Solar-Panel-Roof-Small-min.png"
                alt="First slide"
                style={{height:"180px"}}
              />
              <Carousel.Caption>
                <h3>Easy installations and maintenence</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>  
     </div>  
   

    
        
    );
}




export default SiteCarousal
