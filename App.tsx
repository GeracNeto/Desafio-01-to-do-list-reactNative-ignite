import { useState } from 'react'

import { FlatList, StatusBar, View } from 'react-native'

import { Header } from './src/components/Header/Index'
import { Info } from './src/components/Info'
import { NewTask } from './src/components/NewTask/Index'
import { Tasks } from './src/components/Tasks/Index'
import { Todo } from './src/components/Todo/Index'

import { styles } from './styles'

import { ITask } from './src/components/NewTask/Index'

export default function App() {

  const [todos, setTodos] = useState<ITask[]>([])

  function getTodo(todo: ITask) {

    setTodos([...todos, todo])
  }

  function deleteTask(id: string) {
    const newTodo = todos.filter((todo) => todo.id !== id);

    setTodos(newTodo);
  }

  function completedTask(id: string) {
    const completedTask = todos.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    
    setTodos(completedTask)
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
      <Info 
      tasks={todos}
      />
      {todos.length !== 0 ? (
        <FlatList
          data={todos}
          keyExtractor={todo => todo.id}
          renderItem={({ item }) => (
            <Todo
              key={item.id}
              task={item}
              onDeleteTask={deleteTask}
              onCompletedTask={completedTask}
            />
          )}
        />
      ) : (
        <Tasks />
      )}

    </View>
  )
}

