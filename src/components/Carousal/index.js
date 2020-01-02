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
import Carousel from 'react-bootstrap/Carousel';
import './index.css';

import saveMoneyImg from '../../assets/save-money.png';
import useSolarImg from '../../assets/use-solar.jpg';
import easyInstallImg from '../../assets/easy-install.png';

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
                src={saveMoneyImg}
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
                src={useSolarImg}
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
                src={easyInstallImg}
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
