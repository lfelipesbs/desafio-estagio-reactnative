import { useSelector } from "react-redux"
import { getTweetById } from "../../../store/entities/tweetEntity"
import Tweet from "./Tweet";

const TweetContainer = ({ id }) => {
    const tweet = useSelector(state => getTweetById(state, id));

    return (
        <Tweet
            tweet={tweet}
        />
    )
}

export default TweetContainer;