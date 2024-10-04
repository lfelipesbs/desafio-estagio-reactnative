import React from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";

import { criarcontaStyles } from "./criarconta.styles";

import TextComponent from "../../components/Text/Text";
import logo from '../../assets/img/logo.png';
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const CriarContaScreen = ({
    onCreateSubmit,
    control,
    errors,
}) => (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={ { flex: 1 } }> 
        <Image style={criarcontaStyles.logo} source={logo}/>
        <TextComponent type='h1'>Criar conta</TextComponent>
        <TextComponent type='h2'>Insira suas informações</TextComponent>
        <SafeAreaView style={ { gap: 6 } }>
            <InputField 
                name="nome"
                error={errors.nome?.message}
                control={control}
                label='Nome:'
            />
            <InputField 
                name="nome_usuario"
                error={errors.nome_usuario?.message}
                control={control}
                label='Nome de Usuario:'
            />
            <InputField 
                name="email"
                error={errors.email?.message}
                control={control}
                label='Email:'
            />
            <InputField 
                name="senha"
                error={errors.senha?.message}
                control={control}
                label='Senha:'
                secureTextEntry={true}
            />
            <InputField 
                name="confirmaSenha"
                error={errors.confirmaSenha?.message}
                control={control}
                label='Confirme sua senha:'
                secureTextEntry={true}
            />
        </SafeAreaView>
        <Button type='base' onPress={onCreateSubmit}>Criar Conta</Button>
    </ScrollView>
)

export default CriarContaScreen;