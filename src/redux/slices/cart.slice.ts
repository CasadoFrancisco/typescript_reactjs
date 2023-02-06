import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage";

// Define a type for the slice state
interface CartAddState {
  name:string;
  id: string|number;
  info:string;
  image:string;
}
interface CartRemoveState {
    id: string|number;
  }

// Define the initial state using that type
const initialState: CartAddState[] = getItem('cart') || []

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCard: (state,actions:PayloadAction<CartAddState>) => {
        if(state.length === 0 || state.filter((item)=>item.id === actions.payload.id).length === 0) {
                state.push(actions.payload);
               
        }

        
    },
    removeToCard : (state,actions:PayloadAction<CartRemoveState>) => {
      const {id} = actions.payload;
      if(state.some((item)=>item.id === id)) {
        return state = state.filter((item)=>item.id !== id);
      }

      }
    },
  },
);

export const {addToCard, removeToCard} = cartSlice.actions;
