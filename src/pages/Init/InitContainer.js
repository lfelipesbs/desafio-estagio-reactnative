import { useCallback } from 'react';
import InitScreen from './InitScreen';

const InitContainer = ({ navigation }) => {
    const onCreatePress = useCallback(() => {
        navigation.navigate('CriarConta');
    },[])

    const onLoginPress = useCallback(() => {
        navigation.navigate('Login');
    },[])

    return (
        <InitScreen
            onCreatePress={onCreatePress}
            onLoginPress={onLoginPress}
        />
    )
}

export default InitContainer;