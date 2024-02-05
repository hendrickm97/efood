import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  pratos: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  pratos: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.pratos.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pratos = state.pratos.filter((prato) => prato.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.pratos = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
