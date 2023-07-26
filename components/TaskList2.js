import { useState } from "react";
import { View, Text, Button } from "react-native";


const TaskList2 = (props) => {

    const [tasklist2, setTaskList2] = useState([])

    function addTaskToList() {
        if (props.myInput == '') {
            alert('please write a task')
        }
        else {
            setTaskList2([...tasklist2, props.myInput])
        }
    }

    return (
        <View>
            <Text>{props.myInput}</Text>
            <Button title="add task" onPress={addTaskToList} />
            {
                tasklist2.map((item, i) => <Text key={i}>{i + 1} : {item}</Text>)
            }
        </View>
    );
}



export default TaskList2;