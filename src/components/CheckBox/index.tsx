import { Check } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function CheckBox(){

    return (
        <TouchableOpacity style={styles.checkbox}>
            <Check color='#F2F2F2' size={12} weight='bold'/>
        </TouchableOpacity>
    )
}