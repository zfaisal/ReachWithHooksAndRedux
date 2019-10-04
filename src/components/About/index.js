import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
import {ConfigContext} from '../../App';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import * as $ from 'jquery'

function About(props) {


    const [grid, setGridData] = useState([
        [{value:  1}, {value:  3}],
        [{value:  2}, {value:  4}]
      ])

    useEffect(() => {
        $(".data-grid-container .data-grid .cell .data-editor").css({
            height: '30px !important' 
        })
    })
    

    return (
        

        <div>
           
            <div> this is the About page</div>
            <br  />
            <ReactDataSheet
                data={grid}
                valueRenderer={(cell) => {


                    cell.width = 100
                    cell.height = 50
                    return cell.value
                }}
                width="100"
                onChange={(change, i , j , newValue) => {
                    // change[i,j] 
                    change.width = 100
                   grid[i][j].value = newValue
                    console.log(grid)
                    setGridData(grid)
                    console.log('change', change, newValue, i, j)
                    $(".data-grid-container .data-grid .cell .data-editor").css({
                        height: '30px !important' 
                    })
                    
                }}
                />
        </div>
        
    );
}



About.propTypes = {
    about: PropTypes.object,
    // getAbout: PropTypes.func,
};


export default About
