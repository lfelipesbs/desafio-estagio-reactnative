import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import tweetReducer from "./tweetReducer";
import TweetsEntitiesSlice  from "./entities/tweetEntity";

const store = configureStore({
    reducer: {
        auth: authReducer,
        tweet: tweetReducer,
        entities: combineReducers({
            tweets: TweetsEntitiesSlice
        })
    }
})

export default store;