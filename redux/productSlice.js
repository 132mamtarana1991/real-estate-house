import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    compareProducts: [],
}

export const addProducts = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        compareProduct(state, action) {
            state.compareProducts.push(action.payload)
        },
    },
})

export const { compareProduct } = addProducts.actions

export default addProducts.reducer