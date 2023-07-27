import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import Input2 from './components/Input2';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Input />
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
