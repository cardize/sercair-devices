import axios from 'axios'

const INITIAL_STATE = {
  devices: {},
}

export const reducer = (state = INITIAL_STATE) => {
  axios
    .get('https://landingpage.sercair.com/api/V1/device/all')
    .then((response) => (state.devices = response.data))
    .catch((error) => console.log({ error }))
}
