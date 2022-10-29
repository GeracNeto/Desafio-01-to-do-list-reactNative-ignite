import { Text, View } from 'react-native'

import { Clipboard } from 'phosphor-react-native'

import { styles } from './styles'

export function Tasks() {

    return (
        <View style={styles.view}>
            <View style={styles.tasks}>
                <Clipboard size={56} color={'#808080'} style={styles.clipboard} />
                <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.normalText}>Crie Tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
    )
}