import ApiService from './ApiService'

export const getPassengers = (params) => {
  return ApiService.get('passenger', { params })
}