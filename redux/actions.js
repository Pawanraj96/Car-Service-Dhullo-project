export const VEHICLETYPE = "SETVEHICLETYPE";
export const CARCOMPANY = "SETCARCOMPANY";
export const CARNAME = "SETCARNAME";
export const ADDRESS = "SETADDRESS"
export const TOGGLE = 'SETTOGGLE'

export const setVehicleType= (vehicleType) => (dispatch) => {
  dispatch({
    type: VEHICLETYPE,
    payload: vehicleType,
  });
};
export const setCarCompany= (carCompany) => (dispatch) => {
  dispatch({
    type: CARCOMPANY,
    payload: carCompany,
  });
};
export const setCarName = (carName) => (dispatch) => {
  dispatch({
    type: CARNAME,
    payload: carName,
  });
};

export const setAddress = (address) => (dispatch) => {
    dispatch({
      type: ADDRESS,
      payload: address,
    });
  };

  export const setToggle = (toggle) => (dispatch) => {
    dispatch({
      type: TOGGLE,
      payload: toggle,
    });
  };
