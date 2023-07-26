import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import TaskList2 from "./TaskList2";

const Input2 = () => {
    const [inputText, setInputText] = useState('')

    function inputedText(inputtext){
        setInputText(inputtext)
    }

    return (
        <View>
        <TextInput placeholder='write a task' onChangeText={inputedText} />
        {/* <Text>{inputText}</Text> */}

        <TaskList2 myInput={inputText}/>
        </View>
      );
}
 
export default Input2;