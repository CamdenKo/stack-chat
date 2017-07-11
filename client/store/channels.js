import socket from '../socket';
import axios from 'axios'

const GET_CHANNELS = 'GET_CHANNELS';
const GET_CHANNEL = 'GET_CHANNEL';

export function getChannels (channels){
  return {
    type: GET_CHANNELS,
    channels
  }
}

export function getChannel (channel){
  const action = { type: GET_CHANNEL, channel}
  return action;
}


export function fetchChannels () {
  return function thunk (dispatch){
    return axios.get('/api/channels')
    .then(res => res.data)
    .then(channels => {
      dispatch(getChannels(channels))
    })
  }
}

export function postChannel (channelName, history) {
  return function thunk (dispatch) {
    return axios.post('/api/channels', channelName )
    .then(res => res.data)
    .then(newChannel => {
      dispatch(getChannel(newChannel))
      socket.emit('new-channel', newChannel)
      history.push(`/channels/${newChannel.id}`)
    })
  }
}

export default function channels(state = [], action){
  switch(action.type){
    case 'GET_CHANNELS':
      return action.channels
    case 'GET_CHANNEL':
      return [...state, action.channel]
    default:
      return state
  }

}
