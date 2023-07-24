import { TextInput } from "react-native";

function InputText(inputext){
    console.log(inputext)
}

const Input = () => {
    return (  
        <TextInput placeholder='Add a task' onChangeText={InputText} />
    );
}
 
export default Input;