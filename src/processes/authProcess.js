import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../app/client";

export const login = createAsyncThunk('auth/login', async formData => {
    const { data, error } = await client.post('/tokens', formData);

    return { data, error };
})

export const register = createAsyncThunk('auth/register', async formData => {
    const { data, error } = await client.post('/users', formData);

    return { data, error };
})