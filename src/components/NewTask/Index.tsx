import { TextInput, TouchableOpacity, View } from 'react-native'

import {PlusCircle} from 'phosphor-react-native'

import { styles } from './styles'

export function NewTask() {

    return (
        <View style={styles.newTask}>
            <TextInput 
            style={styles.inputTask}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            />
            <TouchableOpacity style={styles.addTask}>
                <PlusCircle color='#F2F2F2'/>
            </TouchableOpacity>
        </View>
    )
}