import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import TaskList from "./TaskList";

const Input = (props) => {
    // useState to set state of user input
    const [inpuText, setInpuText] = useState('')
 
    // set state into inputText
    function InputedText(inputext){
        setInpuText(inputext)
    }

    return (
        <View>
            {/* to get input from user */}
            <TextInput placeholder='write a task' onChangeText={InputedText} />
            {/* <Text>{inpuText}</Text> */}

            {/* to pass input to second component */}
            <TaskList myInput={inpuText}/>

            
        </View>
    );
}

export default Input;