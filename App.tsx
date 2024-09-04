import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import RenderItem from './list';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Task {
  title: string;
  status: boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTask] = useState<Task[]>([]);

  const storeData = async (value: Task[]) => {
    try {
      await AsyncStorage.setItem('myTodo-task', JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myTodo-task');
      if (value !== null) {
        const taskLocal = JSON.parse(value);
        setTask(taskLocal);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });

  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      donde: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTask(tmp);
    setText('');
    storeData(tmp);
  };
  const deleteFunction = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    tmp.splice(index, 1);
    setTask(tmp);
    storeData(tmp);
  };
  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title);
    const todo = tmp[index];
    todo.status = !todo.status;
    todo.status === true ? false : true;
    setTask(tmp);
    storeData(tmp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Daily Tasks</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="this is between"
          onChangeText={(t: string) => setText(t)}
          value={text}
          placeholderTextColor={styles.text}
          style={styles.textInput}></TextInput>
        <TouchableOpacity style={styles.Button} onPress={addTask}>
          <Text style={styles.text}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          renderItem={({item}) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
