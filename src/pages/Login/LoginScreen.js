import React from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";

import { loginStyles } from "./login.styles";

import TextComponent from "../../components/Text/Text";
import logo from '../../assets/img/logo.png';
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const LoginScreen = ({
    onBackPress,
    onLoginSubmit,
    control,
    loading,
    errors,
    toggleShowPassword
}) => {
    if(loading){
        return(
            <TextComponent type="loading">Loading...</TextComponent>
        )
    }
    return(
        <ScrollView style={ { flex: 1 } }>
            <Image style={loginStyles.logo} source={logo}/>
            <TextComponent type='h1'>Entrar na conta</TextComponent>
            <TextComponent type='h2'>Insira suas informações</TextComponent>
            <SafeAreaView style={ { gap: 6 } }>
                <InputField 
                    name="auth"
                    error={errors.auth?.message}
                    control={control}
                    label='Nome de usuário ou Email:'
                />
                <InputField 
                    name="senha"
                    error={errors.senha?.message}
                    control={control}
                    label='Senha:'
                    secureTextEntry={true}
                />
            </SafeAreaView>
            <Button type='base' onPress={onLoginSubmit}>Entrar</Button>
        </ScrollView>
    )
}

export default LoginScreen;