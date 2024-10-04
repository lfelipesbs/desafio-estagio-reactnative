import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../app/client";

export const showTweets = createAsyncThunk('auth/home', async params => {
    const { data } = await client.get('/tweets', params);

    return data;
})

export const postTweet = createAsyncThunk('auth/post', async formData => {
    const { data, error } = await client.post('/tweets', formData);

    return { data, error };
})