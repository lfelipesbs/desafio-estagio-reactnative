import { TextInput } from "react-native";
import TextComponent from "../Text/Text";

import { inputStyles } from "./input.styles";

const Input = ({ 
    label, 
    onChange,
    error, 
    onFocus,
    onBlur,
    secureTextEntry
}) => (
    <>
        <TextComponent type='p'>{label}</TextComponent>
        <TextInput 
            style={inputStyles.base}
            onChange={onChange} 
            onFocus={onFocus} 
            onBlur={onBlur} 
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
        />
        {error && <TextComponent type='error'>{error}</TextComponent>}
    </>
)

export default Input;