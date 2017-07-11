import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import store from '../store';

import NameEntry from './NameEntry';

export function Navbar (props) {

    return (
      <nav>
        <h3>{props.currentChannel.name}</h3>
        <NameEntry />
      </nav>
    );
  }

function mapStateToProps(state, oldProps){
  let channelId = oldProps.match.params.channelId
  return {
    currentChannel: state.channels.find(channel => {
      return +channel.id === +channelId
    }) || {}
    }
}


export default withRouter(connect(mapStateToProps)(Navbar))
