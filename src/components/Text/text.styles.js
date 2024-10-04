import { StyleSheet } from "react-native";
import { corCinco } from "../../constants/css";

export const textStyle = StyleSheet.create({
    h1: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    h2: {
        color: 'white',
        fontSize: 26,
        alignSelf: 'center',
        marginVertical: 40,
        fontWeight: 'semibold'
    },
    h4_name: {
        color: 'white',
        fontSize: 16
    },
    h6_date: {
        alignSelf: 'flex-end',
        color: 'rgba(255, 255, 255, 0.5)'
    },
    p: {
        color: 'white',
        fontSize: 16,
        marginStart: 26
    },
    p_user: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    p_content: {
        color: 'white',
        fontSize: 20
    },
    loading: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center',
        marginVertical: '50%'
    },
    error: {
        backgroundColor: corCinco,
        alignSelf: 'center',
        borderRadius: 20,
        padding: 16,
        marginTop: 8,
        marginBottom: 16,
        fontSize: 'small',
        color: 'rgba(255, 255, 255, 0.7)'
    }
})