import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

export function ChannelList (props) {

    const messages = props.messages
    return (
      <ul>
        {
          props.channels.map(channel => (
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

/** Write your `connect` component below! **/
export default withRouter(connect(mapStateToProps)(ChannelList))

function mapStateToProps(state){
    return{
      channels: state.channels,
      messages: state.messages,
    }
  }
