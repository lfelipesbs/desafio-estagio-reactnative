import { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import Tweet from "./Tweet";
import { homeStyles } from "./home.styles";

const HomeScreen = ({
    loading,
    ids,
}) => {
    const renderItem = useCallback(item => <Tweet id={item}/>, []);

    return(
        <ScrollView style={homeStyles.tweet} showsVerticalScrollIndicator={false}>
            {ids.map(renderItem)}
        </ScrollView>
    )
}

export default HomeScreen;