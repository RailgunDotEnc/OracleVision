import * as React from 'react';
import * as Haptics from 'expo-haptics'; // If using Expo
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MapPage = () => {
    const navigation = useNavigation();
    const [flashing, setFlashing] = React.useState(false);
    const [message, setMessage] = React.useState('Download Map');
    const [showNavigation, setShowNavigation] = React.useState(false); // State to control button visibility
    const soundFile = "Ding.mp3";



    const startFlashing = () => {
        setFlashing(true);
        setTimeout(() => setFlashing(false), 200);
        setTimeout(() => setFlashing(true), 400);
        setTimeout(() => {
            setFlashing(false);
            setMessage('Downloaded ECSS_Map.cvs');
            setShowNavigation(true);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); // Trigger vibration
        }, 600);
    };
    const playDingSound = () => {
        dingSound.play((success) => {
            if (!success) {
                console.log('Failed to play the sound');
            }
        });
    };
  return (
    
    <View style={styles.container}>
         <View style={styles.header}>
        <Button 
          title="Home" 
          onPress={() => navigation.navigate('Home')} 
        />
        <Button 
          title="Map Download" 
          onPress={() => navigation.navigate('Map')} 
        />
        <Button 
          title="Settings" 
          onPress={() => navigation.navigate('Settings')} 
        />
      </View>
        <View style={styles.navbar}>
          {/* Your navbar content would go here */}
        </View>
      <View style={styles.topSection}>
        <Text style={styles.title}>NFC Reader</Text> 
        <TouchableOpacity style={[styles.button, flashing && styles.darkButton]} onPress={startFlashing}>
          <Text style={styles.buttonText}>{message}</Text> 
        </TouchableOpacity>
      </View>

      {/* Show Navigation Button Conditionally */}
      {showNavigation && (
        <TouchableOpacity style={styles.navigationButton}  onPress={() => navigation.navigate('Home')}> 
          <Text style={styles.navigationButtonText}>Start Navigation</Text> 
        </TouchableOpacity> 
      )}
    </View> 
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black', // Black background 
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'100%'
  },
  title: { 
    fontSize: 30,
    color: 'white',
    marginBottom: 20, 
    textAlign: 'center' // Add this line
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    backgroundColor: 'lightblue', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButton: { 
    backgroundColor: 'darkblue',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center' // Add this line
  },
  topSection: {  
    flex: 2,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButton: {
    flex: 1,  // Takes up 1/3 of the screen
    backgroundColor: 'lightblue',  // Updated color
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
});

export default MapPage;
