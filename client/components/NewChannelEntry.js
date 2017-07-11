import {connect} from 'react-redux';
import React from 'react';
import {makeChannel, postChannel} from '../store';

function NewChannelEntry (props) {



  return (
    <form onSubmit={props.channelSend}>
      <div className="form-group" >
        <label htmlFor="name">Create a Channel</label>
        <input className="form-control" type="text" name="channelName" placeholder="Enter channel name" onChange={props.handleChange}
        value={props.newChannelEntry}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/

const mapStateToProps = function (state, ownProps) {
  return {
    newChannelEntry: state.newChannelEntry,
    history: ownProps.history
  }
}
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(makeChannel(evt.target.value))
    },
    channelSend (evt) {
      evt.preventDefault();
      dispatch(postChannel({ name: evt.target.channelName.value}, ownProps.history))
      dispatch(makeChannel(''))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
