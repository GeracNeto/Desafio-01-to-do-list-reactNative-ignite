import { View } from 'react-native'

import Logo from '../../../assets/Logo.svg'

import { styles } from './styles'

export function Header() {

    return (
        <View style={styles.header}>
            <Logo style={styles.logo} />
        </View>
    )
}