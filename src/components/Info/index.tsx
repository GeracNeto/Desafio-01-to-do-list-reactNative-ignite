
import { View, Text } from 'react-native'

import { styles } from './styles'

export function Info() {

    return (
        <View style={styles.info}>
            <View style={styles.infoTexts}>
                <Text style={styles.createdText}>Criadas</Text>
                <Text style={styles.number}>0</Text>
            </View>
            <View style={styles.infoTexts}>
                <Text style={styles.donesText}>Concluídas</Text>
                <Text style={styles.number}>0</Text>
            </View>
        </View>
    )
}