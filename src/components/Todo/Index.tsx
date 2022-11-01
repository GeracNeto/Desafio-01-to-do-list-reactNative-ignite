import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './style'

import { Trash } from 'phosphor-react-native'

import { CheckBox } from '../CheckBox'

import { ITask } from '../NewTask/Index'

import { useState } from 'react'

interface TaskProps {
    task: ITask;
    onDeleteTask: (id: string) => void;
    onCompletedTask: (id: string) => void
}

export function Todo({ task, onDeleteTask, onCompletedTask }: TaskProps) {

    const [checked, setChecked] = useState<boolean>(false)

    const [trashPressed, setTrashPressed] = useState<boolean>(false)

    function handleChecked() {

        setChecked(!checked)

        onCompletedTask(task.id)
    }

    return (
        <View style={styles.todo}>
            <TouchableOpacity
                onPress={handleChecked}
            >
                <CheckBox
                    checked={checked}
                />
            </TouchableOpacity>
            <Text style={checked ? styles.textComplete : styles.text}>
                {task.task}
            </Text>
            <TouchableOpacity
                onPress={() => onDeleteTask(task.id)}
                onPressIn={() => setTrashPressed(!trashPressed)}
            >
                <Trash 
                size={24} 
                color={trashPressed ? '#E25858' : '#808080'} 
                style={trashPressed ? styles.trashClicked : styles.trash}/>
            </TouchableOpacity>
        </View>
    )
}