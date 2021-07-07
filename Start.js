import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";
function Start() {
  const [task, settask] = useState('')
  const [Taskitems, setTaskitems] = useState([]);
const handleAddTask=()=>{
Keyboard.dismiss();
  setTaskitems([...Taskitems, task]);
  settask('')
}
const compleleTask=(index)=>{

let itemscopy=[...Taskitems];
itemscopy.splice(index,1);
setTaskitems(itemscopy);
}

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>
      <View style={styles.items}>
        {Taskitems.map((item,i)=>
        
        <TouchableOpacity key={i}  onPress={()=>compleleTask(i)} >
        <Task key={i} text={item} />
        </TouchableOpacity>
        
        )}
      </View>

      <KeyboardAvoidingView
        behaviour={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="write a task" onChangeText={(e)=>settask(e)} value={task} />
        <TouchableOpacity onPress={handleAddTask} >
          <View style={styles.addWrapper} >
            <Text style={styles.addText} >+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
    paddingTop:100
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
    fontWeight: "bold",
    color: "#5e5e5e",
  },
  items: {
    margin: 30,
  },
  writeTaskWrapper:{
position:'absolute',
bottom:60,
width:'100%',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'
  },
input:{
paddingVertical:15,
paddingHorizontal:15,
backgroundColor:'white',
borderRadius:60,
borderColor:'#c0c0c0',
borderWidth:1,
width:250,
},
addWrapper:{
width:60,
height:60,
backgroundColor:'white',
borderRadius:60,
justifyContent:'center',
alignItems:'center'
},
addText:{

},
});

export default Start;
