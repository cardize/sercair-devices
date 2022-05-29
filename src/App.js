import React from 'react'
import { connect } from 'react-redux'

function App() {
  return <div className="App">hey</div>
}

const mapStateToProps = (state) => {
  return {
    devices: state.devices,
  }
}

export default connect()(App)
