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
            <Text style={styles.text}>
                {task.task}
            </Text>
            <TouchableOpacity
                onPress={() => onDeleteTask(task.id)}
            >
                <Trash size={24} color='#808080' />
            </TouchableOpacity>
        </View>
    )
}