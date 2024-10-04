import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./HomeScreen"
import { getTweetState } from "../../store/tweetReducer";
import { useEffect } from "react";
import { showTweets } from "../../processes/tweetProcess";

const HomeContainer = ({ navigation }) => {
    const dispatch = useDispatch();
    const { ids, loading } = useSelector(getTweetState);

    useEffect(() => {
        dispatch(showTweets())
    }, [dispatch])

    return (
        <HomeScreen 
            loading={loading}
            ids={ids}
        />
    )
}

export default HomeContainer;