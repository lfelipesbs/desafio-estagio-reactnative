import { createSlice } from "@reduxjs/toolkit";
import { login } from "../processes/authProcess";
import { saveToken } from "../utils/storage";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, state => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;

                saveToken(action.payload?.data.token);
            })
            .addCase(login.rejected, state => {
                state.loading = false;
            })
    }
})

export const getAuthState = state => state.auth;

export default authSlice.reducer;