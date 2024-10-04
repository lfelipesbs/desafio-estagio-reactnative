import { useDispatch } from "react-redux";
import CriarContaScreen from "./CriarContaScreen";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGISTER_SCHEMA } from "../../constants/schemas";
import { useCallback } from "react";
import { register } from "../../processes/authProcess";
import { Alert } from "react-native";

const CriarContaContainer = ({ navigation }) => {
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nome: '',
            nome_usuario: '',
            email: '',
            senha: '',
            confirmaSenha: ''
        },
        resolver: yupResolver(REGISTER_SCHEMA)
    })

    const onCreateSubmit = useCallback(async values =>{
        const { payload } = await dispatch(register(values));

        if(!payload){
            Alert.alert('Oops', 'Algo deu errado');
            return;
        }
        navigation.navigate('Login');
    },[])

    return (
        <CriarContaScreen 
            onCreateSubmit={handleSubmit(onCreateSubmit)}
            control={control}
            errors={errors}
        />
    )
}

export default CriarContaContainer;