import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import foodApis from '../apis/foodApis'

export const fetchFoods = createAsyncThunk(
  'foods/fetchAsync',
  async ({ budget, nutrition }) => {
    const response = await foodApis
      .get(`?price=${budget}&nutrimin=${nutrition[0]}&nutrimax=${nutrition[1]}`)
      .catch((err) => console.log(err))
    return response.data
  },
)

const init_state = {
}

const foodSlice = createSlice({
  name: 'foods',
  initialState: init_state,
  extraReducers: {
    [fetchFoods.fulfilled]: (state, action) => {
      return { ...action.payload }
    },
  },
})

export const getAllFoods = (state) => state.foods

export default foodSlice.reducer
