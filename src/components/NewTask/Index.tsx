import { TextInput, TouchableOpacity, View } from 'react-native'

import { PlusCircle } from 'phosphor-react-native'

import { styles } from './styles'

import { useState } from 'react'

interface Props {
    onGetTodo: (todo: string) => void
}

export function NewTask({onGetTodo}: Props) {

    const [newTodo, setNewTodo] = useState("")

    function createNewTodo(){

        onGetTodo(newTodo)

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