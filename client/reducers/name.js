export default function name(state = "", action){
  switch(action.type){
    case 'UPDATE_NAME':
      return{
        ...state,
        name: action.name
      }
    default:
      return state
  }
}
