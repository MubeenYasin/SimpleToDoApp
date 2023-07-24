import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";

const Input = () => {

    const [inpuText, setInpuText] = useState('')
    const [task, setTask] = useState([''])

    // function InputedText(inputext) {
    //     // console.log(inputext)
    //     setInpuText(inputext)
    // }
    const InputedText = (inputext) => {
        setInpuText(inputext)
    }

    // function AddTask() {
    //     setTask([...task, inpuText])
    // }
    const AddTask = () => {
        setTask([...task, inpuText])
    }

    return (
        <View>
            <TextInput placeholder='Add a task' onChangeText={InputedText} />
            <Button title="add task" onPress={AddTask} />
            {task.map((item) => <Text key={item}>{item}</Text>)}

            
        </View>
    );
}

export default Input;