import React, {Fragment, PureComponent, useState} from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';

import {
    performSearch
} from '../../store/search/Actions';
function SearchBox(props) {

    const [searchTxt, setSearchTxt] = useState("");

    function  handleSearch (e) {

        props.performSearch(e.target.value);
    };

    function setSearchTxtFromInput(e) {
        setSearchTxt(e.target.value)
       
    };


        return (
            <div>
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
};

const mapDispatchToProps = (dispatch) => {
    return {
        performSearch: bindActionCreators(performSearch, dispatch),
    };
};

export function mapStateToProps(state) {
    return {
        search: state.search
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
