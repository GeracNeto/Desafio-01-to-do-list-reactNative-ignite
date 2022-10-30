import { useState } from 'react'
import { StatusBar, View } from 'react-native'

import { Header } from './src/components/Header/Index'
import { Info } from './src/components/Info'
import { NewTask } from './src/components/NewTask/Index'
import { Tasks } from './src/components/Tasks/Index'
import { Todo } from './src/components/Todo/Index'

import { styles } from './styles'

export default function App() {

  const [todos, setTodos] = useState<string[]>([])

  function getTodo(todo: string){

    setTodos([...todos, todo])
  }

  return (
    <View style={styles.app}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <NewTask 
      onGetTodo={getTodo}
      />
      <Info />
      {todos.length !== 0 ? todos.map(todo => (
        <Todo
        key={todo}
        todo={todo}
        />
      )) : (
        <Tasks />
      ) }

    </View>
  )
}

