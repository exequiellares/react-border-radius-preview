import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: '100',
  height: '100',
  color: 'red',
  style: 'solid',
  borderWidth: '1',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
}

const borderStyleSlice = createSlice({
  name: 'border',
  initialState,
  reducers: {
    propertiesUpdated(state, action) {
      state.width = action.payload.width
      state.height = action.payload.height
      state.style = action.payload.style
      state.color = action.payload.color
      state.borderWidth = action.payload.borderWidth
      state.borderTopLeftRadius = action.payload.borderTopLeftRadius
      state.borderTopRightRadius = action.payload.borderTopRightRadius
      state.borderBottomLeftRadius = action.payload.borderBottomLeftRadius
      state.borderBottomRightRadius = action.payload.borderBottomRightRadius

    }
  }
})


export default configureStore({
  reducer: {
    borderStyle: borderStyleSlice.reducer
  }
})

export const { propertiesUpdated } = borderStyleSlice.actions