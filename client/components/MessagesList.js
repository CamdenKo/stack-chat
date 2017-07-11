import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import store from '../store';
import { connect } from 'react-redux'

export function MessagesList (props) {


    const channelId = Number(props.channelId); // because it's a string "1", not a number!
    const messages = props.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }

function mapStateToProps(state, oldProps){
  return{
    messages: state.messages,
    channelId: oldProps.match.params.channelId
  }
}

export default connect(mapStateToProps)(MessagesList)
