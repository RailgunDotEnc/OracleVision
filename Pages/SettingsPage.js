import React, { useState, useEffect } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import
import { BluetoothManager, PermissionsAndroid } from 'react-native';

const SettingsPage = ({ navigation }) => {
  const [volumeLevel, setVolumeLevel] = useState(0.5); // Initial volume (0 to 1)
  const [buzzLevel, setBuzzLevel] = useState(true); // Vibration on/off
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);
  const [connectedDevices, setConnectedDevices] = useState([]); // Array of connected devices

  // Simulate Bluetooth functionality (replace with actual Bluetooth calls)
  useEffect(() => {
    const checkBluetoothEnabled = async () => {
      // Request Bluetooth permission (optional, depending on implementation)
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);

      // Simulate checking Bluetooth status
      setIsBluetoothEnabled(true); // Replace with actual Bluetooth check
    };

    checkBluetoothEnabled();
  }, []);

  // Simulate fetching connected devices (replace with actual Bluetooth calls)
  const fetchConnectedDevices = async () => {
    if (isBluetoothEnabled) {
      const devices = ['Device 1', 'Device 2']; // Replace with actual devices
      setConnectedDevices(devices);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Volume Setting */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Volume Level</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.1}
          value={volumeLevel}
          onValueChange={(newValue) => setVolumeLevel(newValue)}
        />
      </View>

      {/* Buzz Setting */}
      <View style={styles.setting}>
        <Text style={styles.settingText}>Buzz on Alerts</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: '#ccc', true: '#007bff' }}
          thumbColor={buzzLevel ? '#fff' : '#f4f4f4'}
          onValueChange={setBuzzLevel}
          value={buzzLevel}
        />
      </View>

      <View style={styles.setting}>
    <Text style={styles.settingText}>Bluetooth Devices Connected</Text>
    {/* You might add a Switch or a Button here depending on the desired interaction */}
    <Switch 
      style={styles.switch}
      trackColor={{ false: '#ccc', true: '#007bff' }}
      thumbColor={buzzLevel ? '#fff' : '#f4f4f4'}
      onValueChange={(value) => handleBluetoothConnection(value)} // Replace with a suitable function 
      value={isBluetoothEnabled} // Assuming you want to reflect Bluetooth on/off 
    />
  </View>

      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingText: {
    fontSize: 18,
  },
  slider: {
    width: '80%',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Increase switch size for better accessibility
  },
  deviceList: {
    marginBottom: 5,
  },
});

export default SettingsPage;
