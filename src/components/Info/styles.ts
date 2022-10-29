import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    info: {
        marginTop: 32,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 327,
        alignSelf: 'center'
    },
    infoTexts: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createdText: {
        marginRight: 8,
        color: '#4EA8DE',
        fontSize: 14,
    },
    number: {
        color: '#D9D9D9',
        backgroundColor: '#333333',
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 100,
    },
    donesText: {
        marginRight: 8,
        color: '#8284FA',
        fontSize: 14,
    },
})