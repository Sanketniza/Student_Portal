
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    
    initialState: {
        loading: false,
        user:null // this for when user login it will store user data here
    },

    reducers: {
        // action
        SetLoading: (state, action) => {
            state.loading = action.payload;
        },

        setUser: (state, action) => {
            state.user = action.payload; // this for when user login it will store user data here
        },
    }
});

export const { SetLoading , setUser } = authSlice.actions;
export default authSlice.reducer;