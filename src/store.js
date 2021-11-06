import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: '100',
  height: '100',
  color: 'red',
  style: 'solid',
  borderWidth: '1',
  radius: '0'
}

const borderStyleSlice = createSlice({
  name: 'border',
  initialState,
  reducers: {
    propertiesUpdated(state, action) {
      state.width = action.payload.width
      state.height = action.payload.height
      state.radius = action.payload.radius
      state.style = action.payload.style
      state.color = action.payload.color
      state.borderWidth = action.payload.borderWidth
    }
  }
})


export default configureStore({
  reducer: {
    borderStyle: borderStyleSlice.reducer
  }
})

export const { propertiesUpdated } = borderStyleSlice.actions