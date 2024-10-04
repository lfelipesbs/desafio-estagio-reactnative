import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LOGIN_SCHEMA } from '../../constants/schemas';
import LoginScreen from './LoginScreen';
import { useCallback } from 'react';
import { getAuthState } from '../../store/authReducer';
import { login } from '../../processes/authProcess';
import { Alert } from 'react-native';

const LoginContainer = ({ navigation }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(getAuthState);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            auth: '',
            senha: ''
        },
        resolver: yupResolver(LOGIN_SCHEMA)
    })

    const onBackPress = useCallback(() => {
        navigation.navigate("Init");
    }, []);

    const onLoginSubmit = useCallback(async values => {
        const { payload } = await dispatch(login(values));

        if(!payload){
            Alert.alert('Oops...','Credenciais inválidas!')
            return;
        }
        navigation.navigate('HomeTabs');
    },[])

    return (

        <LoginScreen 
            onBackPress={onBackPress}
            onLoginSubmit={handleSubmit(onLoginSubmit)}
            control={control}
            loading={loading}
            errors={errors}
        />
    )
}

export default LoginContainer;