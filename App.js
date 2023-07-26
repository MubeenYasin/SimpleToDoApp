import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input';
import Input2 from './components/Input2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      {/* <Input /> */}
      <Input2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
