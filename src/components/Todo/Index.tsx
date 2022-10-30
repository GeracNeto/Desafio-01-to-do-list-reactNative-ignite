import { Text, View } from 'react-native'

import { styles } from './style'

import { Trash } from 'phosphor-react-native'

import { CheckBox } from '../CheckBox'

interface Props{
    todo: string
}

export function Todo({ todo }: Props) {

    return (
        <View style={styles.todo}>
            <Text>
                <CheckBox />
            </Text>
            <Text style={styles.text}>
                {todo}
            </Text>
            <Trash size={24} color='#808080' />
        </View>
    )
}