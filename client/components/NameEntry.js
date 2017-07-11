import React, { Component } from 'react';
import store, { updateName } from '../store';
import {connect} from 'react-redux'


function NameEntry (props) {

    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={props.handleChange}
          value={props.name}
        />
      </form>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    name: state.name
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return  {handleChange(evt){
    dispatch(updateName(evt.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameEntry)
