import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import Input2 from './components/Input2';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appArea}>
        <Text style={styles.heading}>Simple To-Do App</Text>
        {/* <Input /> */}
        <Input2 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccc',
    // justifyContent: 'center',
  },
  appArea: {
    width: '80%',
    marginTop: 60,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center'
  }

});
