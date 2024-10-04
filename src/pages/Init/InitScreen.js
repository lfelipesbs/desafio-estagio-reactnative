import React from "react"
import { Image, View } from "react-native";

import { initStyles } from "./init.styles";

import logo from '../../assets/img/logo.png';
import Button from "../../components/Button/Button";
import TextComponent from '../../components/Text/Text';

const InitScreen = ({
    onCreatePress,
    onLoginPress
}) => (
    <>
        <Image style={initStyles.logo} source={logo}/>
        <TextComponent type='h1'>Acontecendo Agora</TextComponent>
        <TextComponent type='h2'>Inscreva-se hoje</TextComponent>
        <View style={initStyles.btns}>
            <Button type='base' onPress={onCreatePress}>
                Criar conta
            </Button>
            <Button type='base' onPress={onLoginPress}>
                Login
            </Button>
        </View>
    </>
)

export default InitScreen;