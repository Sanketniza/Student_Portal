
import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    
    name: "application",

    initialState: {
        applicants: []
    },

    reducers: { 

        setApplications: (state , action) => {
            state.applicants = action.payload;
        }

    }

});

export const {setApplications} = applicationSlice.actions;
export default applicationSlice.reducer;