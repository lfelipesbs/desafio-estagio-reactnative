import { createSlice } from "@reduxjs/toolkit";
import { TweetsEntitiesAdapter } from "./entities/tweetEntity";
import { showTweets } from "../processes/tweetProcess";

const initialState = TweetsEntitiesAdapter.getInitialState({
    loading: false,
    ids: []
})

const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(showTweets.pending, state => {
                state.loading = true
            })
            .addCase(showTweets.fulfilled, (state, action) => {
                state.loading = false;

                TweetsEntitiesAdapter.setMany(state, action.payload || [])
            })
            .addCase(showTweets.rejected, state => {
                state.loading = false
            })
    }
})

export const getTweetState = state => state.tweet;

export default tweetSlice.reducer;