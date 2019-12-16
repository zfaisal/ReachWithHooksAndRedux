import React, {Fragment, PureComponent, useState, useRef, useEffect, useContext, useReducer} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes, { func } from 'prop-types';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable, MDBDataTable, MDBSelect  } from "mdbreact";
import * as $ from 'jquery'
import { Button } from 'react-bootstrap';
//import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { faHome, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as _ from 'underscore'
import * as moment from 'moment'
import * as dataTable from 'datatables.net'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


function Editable(props) {

  const [columns, setColums] = useState([
    {name: "First Name" , id: 0},
    {name: "Last Name", id: 1},
    {name: "Joined", id: 2}, 
    {name: "Auto", id: 3}
  ])

  const [rows, setRows] = useState(
    [
      {fname:"Zaki", lname: "Faisal", joined: '2010-10-12', id:0 }
  
    ]
  )

  const [options, setOptions] = useState([
    {
      text: "Option nr 1",
      value: "1"
    },
    {
      text: "Option nr 2",
      value: "2"
    },
    {
      checked: true,
      text: "Option nr 3",
      value: "3"
    },
    {
      text: "Option nr 4",
      value: "4"
    },
    {
      text: "Option nr 5",
      value: "5"
    }
  ])


  var top100Films = [
    // { title: 'The Shawshank Redemption', year: 1994, checked: true },
    // { title: 'The Godfather', year: 1972 },
    // { title: 'The Godfather: Part II', year: 1974 },
    // { title: 'The Dark Knight', year: 2008 },
    // { title: '12 Angry Men', year: 1957 },
    // { title: "Schindler's List", year: 1993 }
  ]


  var i = 0;

  while ( i < 1000)
  {
    top100Films.push({ title: 'The Shawshank Redemption' + i, year: i })
    i++;
  }

  const [top100Filmss, setit] = useState(top100Films);

  // const options = [
  //   {
  //     text: "Option nr 1",
  //     value: "1"
  //   },
  //   {
  //     text: "Option nr 2",
  //     value: "2"
  //   },
  //   {
  //     checked: true,
  //     text: "Option nr 3",
  //     value: "3"
  //   },
  //   {
  //     text: "Option nr 4",
  //     value: "4"
  //   },
  //   {
  //     text: "Option nr 5",
  //     value: "5"
  //   }
  // ]

  useEffect(() =>{
    $("#table_id").dataTable()
  })

 function handleChange(e, rowPasseed) {
   var propName = $(e.target).attr("labeled");

   var rowsCopy = [];
   rows.forEach(row => {
     if(row.id == rowPasseed.id)
     {
       row[propName] = e.target.value;
      //  console.log(row);
     }

     rowsCopy.push(row)
   })

   setRows(rowsCopy);
 }

 function selectedchange(e, v, row) {
  // var indexSelected = $(e.target).attr("data-option-index");
   console.log(e, v)
 }


 useEffect(() => {
  //  console.log("top100Filmss", top100Filmss)
 }, [rows, top100Filmss])



  return (
    <div>
     <table id="table_id" className="display">
    <thead> 
      <tr>
        {columns.map(col => {
          return (
              <th key={col.id}>{col.name}</th>
          )
        })}
      </tr>
        
    </thead>
    <tbody>
        {rows.map(row => {
          return (
            <tr key={row.id}>
              <td><input type="text" value={row.fname} labeled="fname"  onChange={(e) => { handleChange(e, row) }} /></td>
              <td><input type="text" value={row.lname} labeled="lname" onChange={(e) => { handleChange(e, row) }} /></td>
              <td><input type="date" value={row.joined} labeled="joined" onChange={(e) => { handleChange(e,  row) }}/></td>
              <td><Autocomplete
              highlight
                      multiple
                      id="combo-box-demo"
                      options={top100Filmss}
                      getOptionLabel={option => option.title}
                      key={option => option.year}
                      style={{ width: 300, maxHeight: 100, overflow: "scroll" }}
                      renderInput={params => (
                        <TextField {...params} label="Combo box" variant="outlined" fullWidth />
                      )}
                      onChange={(e, v) => selectedchange(e, v,  row)}
                    />
              </td>
              
            </tr>
          )
        })}
    </tbody>
</table>
    </div>
  );
}




export default Editable
