import { Check } from 'phosphor-react-native'
import { View } from 'react-native'
import { styles } from './styles'

interface Props {
    checked: boolean;
}

export function CheckBox({ checked }: Props) {

    return (
        <View style={styles.checkbox}>
            {checked && <Check color='#F2F2F2' size={12} weight='bold' />}
        </View>
    )
}