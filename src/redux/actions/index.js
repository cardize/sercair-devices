const DEVICE_OFFER = 'DEVICE_OFFER'

export const deviceOffer = (device) => {
  return {
    type: DEVICE_OFFER,
    payload: device,
  }
}
