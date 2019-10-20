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

import './index.css'

function About(props) {

    const [selectedData, setSelectedData] = useState([])
    
    var rows = []

    var total = 30000;

    var index =1;

    while(index <=total)
    {
        var className = "myradio-" + index
        rows.push({name: index,
            selected: index < 3 ? true:false,
           
        })
        index++;
    }


    rows.forEach(row => {
        row.name =  row.name 
        
        row.another = <div>  <input  type="checkbox" checked={row.selected} onChange={() =>{onChangeRadio(row)}} /></div>
        //  row.another = <div>  {row.selected && <FontAwesomeIcon icon={faCheck} />  }  <MDBInput  className="btn btn-info" color="purple" type="button" value={row.name} onClick={() =>{onChangeRadio(row)}} /></div>

    })

    function onChangeRadio(row) {
      // console.log(row)
       
          
        var datasetTemp = {...data}
        

        // datasetTemp.rows = [];
        // datasetTemp.columns = [];
        var selectedDataInfo =selectedData
       
        datasetTemp.rows.forEach(item => {
            
            if(item.name == row.name)
            {
                var it = row
                it.name = it.name
                it.selected = !it.selected
                it.another = <div>   <input  type="checkbox" checked={it.selected} onChange={() =>{onChangeRadio(it)}} /> </div>

                // it.another = <div>  {it.selected && <FontAwesomeIcon icon={faCheck} />  }  <MDBInput  className="btn btn-info" color="purple" type="button" value={it.name} onClick={() =>{onChangeRadio(it)}} /></div>
                if(it.another)
                {
                    selectedDataInfo.push(it.name)
                }
                // datasetTemp.rows.push(it)
            }
            else
            {
                var it = item
                // datasetTemp.rows.push(it)
            }
            
        })
        $("input[type='search']").val("asdasd")
        // data.columns.forEach(item => {
        //     datasetTemp.columns.push({...item})
        // })

       

       
        
        setData(datasetTemp)
        setSelectedData(selectedDataInfo)

      

    }


 


    const dataSet = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150,
            class: "hello"
          },
          ,
          {
            label: 'Selected',
            field: 'selected',
            sort: 'asc',
            width: 270,
          }
          ,
          {
            label: 'Control',
            field: 'another',
            sort: 'asc',
            width: 270
          }
        ]
        ,
        rows: rows
        }

        const [data, setData] = useState(dataSet)

       
        useEffect(() => {
            // console.log('data',data)
            setTimeout(() => {
               $(".mdb-table table thead th:nth-child(2)").attr("class", "hidden")
               $(".mdb-table table tbody tr td:nth-child(2)").attr("class", "hidden")
            }, 1000);
        })
       
      

    return (
        
         <div>
             {selectedData.map(f=> {
               return  <div key={f}>{f}</div>
             })}
             <br/>
             <MDBDataTable
              striped
              bordered
              hover
              className="mdb-table"
              data={data}
            />
         </div>
            

    
        
    );
}



About.propTypes = {
    about: PropTypes.object,
    // getAbout: PropTypes.func,
};


export default About
