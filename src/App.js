import React from 'react'
import './styles.scss'
import { connect } from 'react-redux'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { deviceOffer } from './redux/actions'

const App = (props) => {
  const url = 'https://landingpage.sercair.com/api/V1/device/all'
  const [isLoading, setIsLoading] = useState(true)
  const [devices, setDevices] = useState([])
  const [isOffer, setIsOffer] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setDevices(response.data.data))
      .catch((error) => console.log({ error }))
      .finally(() => setIsLoading(false))
  }, [])

  const handleClick = (device) => {
    localStorage.setItem('localDevice', JSON.stringify(device))
  }

  const popUpDevice = useCallback(() => {
    return <div>{props.localDevice.deviceName}</div>
  }, [props.localDevice])

  const popUpOffer = useCallback(() => {
    if (localStorage.getItem('localDevice') && isOffer === true) {
      const localDevice = JSON.parse(localStorage.getItem('localDevice'))
      return (
        <div>
          <div>{localDevice.deviceName}</div>
          <div>{localDevice.desc}</div>
          <h1>%50 BABYY</h1>
        </div>
      )
    }
  }, [isOffer])

  return (
    <div className="App">
      {popUpDevice()}
      {popUpOffer()}
      <div className="main-container">
        <div className="devices-container">
          {isLoading ? (
            <div className="loading-container">
              <h1 className="loading-banner">LOADING...</h1>
            </div>
          ) : (
            devices.map((device) => {
              return (
                <div key={device.deviceName} className="device-container">
                  <img className="device-image" src={device.imageUrl} alt="" />
                  <div className="device-name-container">
                    <h6 className="device-name">Sercair</h6>
                    <p className="device-name">{device.deviceName}</p>
                  </div>

                  <button
                    className="details-button"
                    onClick={() => (
                      props.deviceOffer(device),
                      handleClick(device),
                      setIsOffer(false)
                    )}
                  >
                    DETAY
                  </button>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    localDevice: state.localDevice,
  }
}

export default connect(mapStateToProps, { deviceOffer })(App)
