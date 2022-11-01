import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    newTask: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -27,
    },
    inputTask: {
        backgroundColor: '#262626',
        color: '#F2F2F2',
        height: 52,
        padding: 16,
        width: 271,
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        fontSize: 16
    },
    inputTaskFocus:{
        backgroundColor: '#262626',
        color: '#F2F2F2',
        height: 52,
        padding: 16,
        width: 271,
        borderRadius: 6,
        borderColor: '#5E60CE',
        borderWidth: 1,
        fontSize: 16
    },
    addTask: {
        backgroundColor: '#1E6F9F',
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        color: '#F2F2F2',
        marginLeft: 4
    },
    addTaskPressed:{
        backgroundColor: '#4EA8DE',
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        color: '#F2F2F2',
        marginLeft: 4
    }
})