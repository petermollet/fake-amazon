import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  	items: [],
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const index = state.items.findIndex(i => i.id === action.payload.id)
			if(index === -1)	{
				let product = {...action.payload}
				product.quantity = 1
				state.items = [...state.items, product]
			} else {
				let clone = [...state.items]
				clone[index].quantity += 1
				state.items = clone
			}
		},
		removeFromCart: (state, action) => {
			const index = state.items.findIndex(i => i.id === action.payload.id)
			if(index > -1){
				let clone = [...state.items]
				if(state.items[index].quantity === 1)
					clone.splice(index, 1)
				else
					clone[index].quantity -= 1
				state.items = clone
			} else
				console.warn( `Cant remove product(id: ${action.payload.id}) as its in the cart!`)
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItems = (state) => state.cart.items
export const selectTotalItems = (state) => state.cart.items.reduce((t, i) => t + i.quantity, 0)
export const selectTotal = (state) => state.cart.items.reduce((t, i) => t + i.quantity * i.price, 0)
export default cartSlice.reducer
