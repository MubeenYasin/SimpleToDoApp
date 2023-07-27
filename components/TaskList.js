import { useState } from "react";
import { View, Text, Button } from "react-native";

const TaskList = (props) => {

    const [taskList, setTaskList] = useState([])

    function AddTask(){
        if(props.myInput == ''){
            alert('please write a task')
        }else{
        setTaskList([...taskList, props.myInput])
        }
    }
    return (
        <View>
            <Button title="add task" onPress={AddTask} />
            {/* <Text>Data from Input : {props.myInput}</Text> */}
            {
                taskList.map((item, i) => <Text key={i}>{i}{item}</Text>)
            }
        </View>
      );
} 
 

export default TaskList;