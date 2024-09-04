import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import {Task} from './App'


interface itemProps {
    item: Task,
    markDone:(task: Task)=> void,
    deleteFunction: (task: Task)=> void,
}

export default function RenderItem({item, markDone, deleteFunction}: itemProps) {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={()=>markDone(item)}>
          <Text style={item.status ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={styles.text}>{new Date(item.date).toLocaleDateString()}</Text>
        </TouchableOpacity>

        {item.status && (
          <TouchableOpacity style={styles.removeButton}>
            <Text onPress={()=>deleteFunction(item)} style={styles.text}>Eliminar</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };