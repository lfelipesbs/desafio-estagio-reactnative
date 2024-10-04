import { View } from "react-native";
import TextComponent from "../../../components/Text/Text";
import { tweetStyles } from "./tweet.styles";

const Tweet = ({ tweet, key }) => (
    <>
        <View key={key} style={tweetStyles.base}>
            <TextComponent type='h4-name'>
                {tweet.nome}
            </TextComponent>
            <TextComponent type='p-user'>
                @{tweet.nome_usuario}
            </TextComponent>
            {tweet.criado && <TextComponent type='h6-date'>{tweet.criado}</TextComponent>}
            {tweet.atualizado && <TextComponent type='h6-date'>{tweet.atualizado} (alterado)</TextComponent>}
            <TextComponent type='p-content'>
                {tweet.conteudo}
            </TextComponent>
        </View>
    </>
)

export default Tweet;