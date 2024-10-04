import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { showTweets } from "../../processes/tweetProcess";

export const TweetsEntitiesAdapter = createEntityAdapter();

const initialState = TweetsEntitiesAdapter.getInitialState();

export const TweetsEntitiesSlice = createSlice({
    initialState,
    name: 'tweets',
    extraReducers: builder => {
        builder
            .addCase(showTweets.fulfilled, (state, action) => {
                TweetsEntitiesAdapter.setMany(state, action.payload || [])
            });
    }
})

export const {
    selectById: getTweetById
} = TweetsEntitiesAdapter.getSelectors(state => state.entities.tweets);

export default TweetsEntitiesSlice.reducer;