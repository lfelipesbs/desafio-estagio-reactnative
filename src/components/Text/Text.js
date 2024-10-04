import { Text } from "react-native";

import { textStyle } from "./text.styles";

const TextComponent = ({ children, type }) => {
    const getStyle = (type) => {
        switch(type){
            case 'h1': 
                return textStyle.h1;
            case 'h2':
                return textStyle.h2;
            case 'h4-name':
                return textStyle.h4_name;
            case 'h6-date':
                return textStyle.h6_date;
            case 'p':
                return textStyle.p;
            case 'p-user':
                return textStyle.p_user;
            case 'p-content':
                return textStyle.p_content;
            case 'loading':
                return textStyle.loading;
            case 'error':
                return textStyle.error;
            default: 
                return;
        }
    }
    
    return (
        <Text style={getStyle(type)}>{children}</Text>
    )
}

export default TextComponent;
