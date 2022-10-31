
import { View, Text } from 'react-native'
import { ITask } from '../NewTask/Index';

import { styles } from './styles'

interface TasksInfo {
    tasks: ITask[];
}

export function Info({ tasks }: TasksInfo) {

    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.isComplete === true)
    const totalCompletedTasks = completedTasks.length

    return (
        <View style={styles.info}>
            <View style={styles.infoTexts}>
                <Text style={styles.createdText}>Criadas</Text>
                <Text style={styles.number}>{totalTasks}</Text>
            </View>
            <View style={styles.infoTexts}>
                <Text style={styles.donesText}>Concluídas</Text>
                <Text style={styles.number}>{totalCompletedTasks}</Text>
            </View>
        </View>
    )
}