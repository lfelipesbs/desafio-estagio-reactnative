import { StyleSheet } from "react-native";
import { corTres } from "../../constants/css";

export const buttonStyle = StyleSheet.create({
    base: {
        width: '50%',
        padding: 16,
        borderRadius: 20,
        backgroundColor: corTres,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10
    },
    text: {
        color: 'white'
    },
    header: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: corTres,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    }
})