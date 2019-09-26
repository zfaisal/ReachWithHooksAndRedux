import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import {ConfigContext} from '../../App';


function About(props) {
    return (
        <div> this is the About page</div>
    );
}



About.propTypes = {
    about: PropTypes.object,
    // getAbout: PropTypes.func,
};


export default About
