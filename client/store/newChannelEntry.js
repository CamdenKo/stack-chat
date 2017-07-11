const MAKE_CHANNEL = 'MAKE_CHANNEL';

export function makeChannel (channelName) {
  const action = { type: MAKE_CHANNEL, channelName};
  return action;
}

export default function makeChannelReducer(state = '', action){
  switch(action.type){
    case MAKE_CHANNEL:
      return action.channelName
    default:
      return state
  }
}
