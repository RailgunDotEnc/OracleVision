import * as React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartPage = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');

  const handleRegistration = () => {
    // TODO: Add your registration logic here (save data, etc.)

    // Navigate to Home.js
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Name" 
          value={name}
          onChangeText={setName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Age" 
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Height" 
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric" 
        />
      </View>

      <Button title="Enter" onPress={handleRegistration} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputContainer: {
    padding: 20,
  },  
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 20
  }
});

export default StartPage;

