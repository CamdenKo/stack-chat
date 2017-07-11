import React, { Component } from 'react';

export default function Channel(props){
  const channelName = props.channelName
  const messages = props.messages

  return(
    <NavLink to={channelName} activeClassName="active">
      <span># {channelName}</span>
      <span className="badge">{ messages.filter(message => message.channelId === 1).length }</span>
    </NavLink>
  )
}
