import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 247,
    },
    tasks: {
        borderTopColor: '#333333',
        borderTopWidth: 2,
        width: 327,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 48
    },
    clipboard:{
        marginBottom: 16
    },
    textBold:{
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
    },
    normalText:{
        color: '#808080',
        fontSize: 14
    }
})