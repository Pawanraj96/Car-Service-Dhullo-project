import { VEHICLETYPE, CARNAME, CARCOMPANY, ADDRESS,TOGGLE } from './actions'

const initialstate = {
  vehicleType: '',
  carCompany: '',
  carName: '',
  address: '',
  toggle:false
}

export const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case VEHICLETYPE:
      return { ...state, vehicleType: action.payload }
    case CARCOMPANY:
      return { ...state, carCompany: action.payload }
    case CARNAME:
      return { ...state, carName: action.payload }
    case ADDRESS:
      return { ...state, address: action.payload }
      case TOGGLE:
        return { ...state, toggle: action.payload }
    default:
      return initialstate
  }
}
