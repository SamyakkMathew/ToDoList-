import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';
import { Touchable } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask =(index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/*Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        

        <View style={styles.items}>
          {/*This is where the tasks will go */}
          {
            taskItems.map((item,index) => {
             return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
             )

              
            })
          }
          {/*<Task text={'Task 1'}></Task>
          <Task text={'Task 2'}></Task> */}
        </View>
      </View>


      {/* Write a task*/}
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a Task'} value = {task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.developedbyContainer}> 
          <Text style={styles.developedby}>Developed By </Text>
          <Text style={styles.sam}>SAMYAKK MATHEW</Text>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#b3b3ff',
    borderWidth: 1,
    width: 250,
    marginLeft: 40,

  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#8080ff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginRight: 40,

  },
  addText: {},
  developedbyContainer: {
    position: 'absolute',
    bottom:10,
    marginLeft: 120,
    

  },
  developedby:{
    fontSize: 14,
    textAlign: 'center',
    
    
    
    

  },
  sam: {
    fontSize: 14,
    fontStyle: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',

  }
});