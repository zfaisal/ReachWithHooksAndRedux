import React, {Fragment, PureComponent, useState, useEffect} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';

import {
    performSearch, 
    getPlayers
} from '../../store/search/Actions';
import { get } from 'http';
function SearchBox(props) {

    const [searchTxt, setSearchTxt] = useState("");
    const [players, setPlayers] = useState("");



    function  handleSearch (e) {

        props.performSearch(e.target.value);
    };

    function setSearchTxtFromInput(e) {
        setSearchTxt(e.target.value)
       
       

    };

    useEffect(() => {
        console.log('out', props.players)
        props.getPlayers()
        // return ( () => {
        //     console.log('return')
        //     props.getPlayers()
        // })
    }, [])

   function getEmployeeitem(item) {
      
      
      alert(item.employee_salary)
    }


        return (
           
            <div>
                {props.players.map(function(item) {
                    return <div>{item.employee_name} <button onClick={() => getEmployeeitem(item)} >click me</button></div>
                })}
                <div className="search-box">
                    <input type={'text'} onChange={setSearchTxtFromInput} />
                    <button onClick={handleSearch}>Search</button>
                </div>
               
                <div>
                    {props.search.imageUrl &&
                        <Fragment>
                            <img src={props.search.imageUrl} alt={'Giphy'} />
                            <div>{props.search.imageUrl}</div>
                        </Fragment>}
                </div>
            </div>
        );
    
}


SearchBox.propTypes = {
    search: PropTypes.object,
    performSearch: PropTypes.func,
    getPlayers: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        performSearch: bindActionCreators(performSearch, dispatch),
        getPlayers: bindActionCreators(getPlayers, dispatch)
        
    };
};

export function mapStateToProps(state) {
    console.log('mapStateToProps',state)
    return {
        search: state.search, 
        players: state.search.players
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
