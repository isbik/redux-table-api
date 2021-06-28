import createCacheApiReducer from '../../helpers/createCacheApiReducer';
import { getPassengers } from '../../services/passenger';

const passengerSlice = createCacheApiReducer('passenger', {
  api: getPassengers
})

export const { fetchItems: fetchPassengers } = passengerSlice.actions

export default passengerSlice.reducer