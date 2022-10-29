import { Text, View } from 'react-native'

import { styles } from './style'

import { Check, Trash } from 'phosphor-react-native'

import { CheckBox } from '../CheckBox'

export function Todo() {

    return (
        <View style={styles.todo}>
            <Text>
                <CheckBox />
            </Text>
            <Text style={styles.text}>
                Comprar alugma coisa
            </Text>
            <Trash size={24} color='#808080'/>
        </View>
    )
}