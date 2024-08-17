
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
    },

    reducers: {
        // action
        SetLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { SetLoading } = authSlice.actions;
export default authSlice.reducer;