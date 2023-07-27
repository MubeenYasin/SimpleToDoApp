import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const TaskList2 = (props) => {

    const [tasklist2, setTaskList2] = useState([])

    function addTaskToList() {
        if (props.myInput == '') {
            alert('please write a task')
        }
        else {
            if (tasklist2.length < 10) {
                setTaskList2([...tasklist2, props.myInput])
            }
            else {
                alert('--------Only 10 Task can be added--------- Buy premium version to add unlimeted task')
            }
        }
    }

    return (
        <View >
            {/* <Text>{props.myInput}</Text> */}
            <Button title="add task" onPress={addTaskToList} />
            <View style={styles.listView}>
                {
                    tasklist2.map((item, i) =>
                        <View>
                            <Text style={styles.list} key={i}>
                                {i + 1}: {item}
                            </Text>
                        </View>
                    )
                }
            </View>
        </View>
    );
}
export default TaskList2;

const styles = StyleSheet.create({
    listView: {
        marginVertical: 10,
    },
    list: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 3,
        verticalAlign: 'middle',
        padding: 3,
        paddingHorizontal: 10,
    }
})