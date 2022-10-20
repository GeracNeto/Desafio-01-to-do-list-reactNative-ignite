import { StatusBar, View } from 'react-native'

import { Header } from './src/components/Header/Index'
import { NewTask } from './src/components/NewTask/Index'

import { styles } from './styles'

export default function App() {

  return (
    <View style={styles.app}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <NewTask />
    </View>
  )
}

