import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
// const RANDOM_CHANNEL = '/channels/1';
// const GENERAL_CHANNEL = '/channels/2';
// const DOGS_CHANNEL = '/channels/3';
// const LUNCH_CHANNEL = '/channels/4';

export class ChannelList extends Component {

  constructor () {
    super();
    this.state = store.getState();

  }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  // }

  // componentWillUnmount () {
  //   this.unsubscribe();
  // }

  render () {

    const messages = this.props.messages
    return (
      <ul>
        {
          this.props.channels.map(channel => (
            <li key = {channel.id}>
              <NavLink to= {`/channels/${channel.id}`} activeClassName="active">
                <span># {channel.name}</span>
                <span className="badge">{ messages.filter(message =>{

                  return +message.channelId === +channel.id
                } ).length }</span>
              </NavLink>
            </li>
          ))
        }
        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );
  }
}

/** Write your `connect` component below! **/
export default withRouter(connect(mapStateToProps)(ChannelList))

function mapStateToProps(state){
    return{
      channels: state.channels,
      messages: state.messages,
    }
  }
