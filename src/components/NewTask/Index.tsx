import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { styles } from './styles'

import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

export interface ITask {
    id: string;
    task: string;
    isComplete: boolean;
}

interface Props {
    onGetTodo: (todo: ITask) => void
}

export function NewTask({ onGetTodo }: Props) {

    const [newTodo, setNewTodo] = useState("")

    const [addTaskPressed, setAddTaskPressed] = useState<boolean>(false)
    const [inputFocus, setInputFocus] = useState<boolean>(false)

    function createNewTodo() {

        if (!newTodo) {
            setAddTaskPressed(false)
            return Alert.alert("Insira uma tarefa")
        }

        const newTask = {
            id: uuidv4(),
            task: newTodo,
            isComplete: false
        }

        onGetTodo(newTask)

        setNewTodo("")
        setAddTaskPressed(false)
    }

    return (
        <View style={styles.newTask}>
            <TextInput
                style={inputFocus ? styles.inputTaskFocus : styles.inputTask}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor='#808080'
                onChangeText={setNewTodo}
                value={newTodo}
                onFocus={() => setInputFocus(true)}
            />
            <TouchableOpacity
                style={addTaskPressed ? styles.addTaskPressed : styles.addTask}
                onPress={createNewTodo}
                onPressIn={() => setAddTaskPressed(true)}
            >
                <PlusCircle color='#F2F2F2' />
            </TouchableOpacity>
        </View>
    )
}