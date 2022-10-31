import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { styles } from './styles'

import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export interface ITask{
    id: string;
    task: string;
    isComplete: boolean;
}

interface Props {
    onGetTodo: (todo: ITask) => void
}

export function NewTask({onGetTodo}: Props) {

    const [newTodo, setNewTodo] = useState("")

    function createNewTodo(){

        if (!newTodo) {
            return Alert.alert("Insira uma tarefa")
        }

        const newTask = {
            id: uuidv4(),
            task: newTodo,
            isComplete: false
        }

        onGetTodo(newTask)

        setNewTodo("")
    }

    return (
        <View style={styles.newTask}>
            <TextInput
                style={styles.inputTask}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                onChangeText={setNewTodo}
                value={newTodo}
            />
            <TouchableOpacity 
            style={styles.addTask}
            onPress={createNewTodo}
            >
                <PlusCircle color='#F2F2F2' />
            </TouchableOpacity>
        </View>
    )
}