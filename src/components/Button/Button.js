import { TouchableOpacity, Text } from 'react-native';
import { buttonStyle } from './button.styles';

const Button = ({ children, onPress, type }) => {
    const getStyle = (type) => {
        switch(type){
            case 'base':
                return buttonStyle.base;
            case 'header':
                return buttonStyle.header;
            default:
                return;
        }
    }

    return(
        <TouchableOpacity style={getStyle(type)} onPress={onPress}>
            <Text style={buttonStyle.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button;