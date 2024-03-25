import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const [hasCameraPermission, setHasCameraPermission] = React.useState(null);
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const cameraRef = React.useRef(null);
  const [rightLineColor, setRightLineColor] = React.useState('green'); 
  const [leftLineColor, setLeftLineColor] = React.useState('green'); 
  const [topDashColor, setTopDashColor] = React.useState('green'); 
  const [bottomDashColor, setBottomDashColor] = React.useState('green'); 
  const [directionleft, directionLeft] = React.useState('transparent'); 
  const [directionright, directionRight] = React.useState('transparent');

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []); 

  if (hasCameraPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
// Helper functions        
const handleLeftDirectionClick = () => {
  directionLeft('green');
  setTimeout(() => directionLeft('transparent'), 1000); 
};

const handleRightDirectionClick = () => {
  directionRight('green');
  setTimeout(() => directionRight('transparent'), 1000); 
};
  const handleLeftClick = () => {
    setLeftLineColor('red');
    setTimeout(() => setLeftLineColor('green'), 10); 
  };

  const handleRightClick = () => {
    setRightLineColor('red');
    setTimeout(() => setRightLineColor('green'), 10); 
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
      <View style={styles.directionalContainer}>
        <TouchableOpacity onPress={handleLeftDirectionClick}>
          <Text style={[styles.directionlefttext, { color: directionleft }]}>L</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRightDirectionClick}>
          <Text style={[styles.directionrighttext, { color: directionright }]}>R</Text>
        </TouchableOpacity>
      </View>

      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <View style={styles.navbar}>

        </View>
        {/* Directional */}
        
        <View style={styles.lineContainer}>
          <TouchableOpacity 
            style={[styles.lineLeft, { backgroundColor: leftLineColor }]}
            onPress={handleLeftClick}  
          />

          <TouchableOpacity 
            style={[styles.lineRight, { backgroundColor: rightLineColor }]} 
            onPress={handleRightClick}  
          />
        </View>

        {/* Top Dashes */}
        <View style={styles.dashesContainerTop}> 
          <View style={[styles.dashLeft, { backgroundColor: topDashColor }]} /> 
          <View style={[styles.dashRight, { backgroundColor: topDashColor }]} /> 
        </View>
        <View style={styles.textcontainer1}>
          <Text style={styles.text1}>10Ft</Text>
        </View>
        <View style={styles.textcontainer2}>
          <Text style={styles.text1}>5Ft</Text>
        </View>
        <View style={styles.dashesContainerMiddle}>
          <View style={[styles.dashLeft, { backgroundColor: bottomDashColor }]} /> 
          <View style={[styles.dashRight, { backgroundColor: bottomDashColor }]} /> 
        </View>

      </Camera>
      {/* Right button */}
      <TouchableOpacity 
        style={styles.invisibleButtonRight} 
        onPress={() => { 
          setRightLineColor(rightLineColor === 'green' ? 'red' : 'green'); 
        }}
      /> 

      {/* Middle button */}
      <TouchableOpacity 
        style={styles.invisibleButtonMiddle} 
        onPress={() => { 
          setTopDashColor(topDashColor === 'green' ? 'red' : 'green');
        }}
      /> 
      {/* Middle button */}
      <TouchableOpacity 
        style={styles.invisibleButtonMiddleBottom} 
        onPress={() => { 
          setBottomDashColor(bottomDashColor === 'green' ? 'red' : 'green');
        }}
      /> 

      {/* Left Button */}
      <TouchableOpacity 
        style={styles.invisibleButtonLeft} 
        onPress={() => { 
          setLeftLineColor(leftLineColor === 'green' ? 'red' : 'green');
        }}
      /> 
      
      {capturedImage && ( 
        <Image source={{ uri: capturedImage }} style={styles.capturedImage} /> 
      )} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },  
  navbar: {
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  directionalContainer:{
    flexDirection: 'row',
    width:'100%',
    backgroundColor:'white',
    textAlign: 'center',
    backgroundColor:'transparent',
    position: 'absolute',
    top:50,
    zIndex:2,
  },
  directionlefttext:{
    color:'green',
    fontSize: 58,
    left:10,
    width:50,
  },
  directionrighttext:{
    color:'green',
    fontSize: 58,
    right: -250,
    width:50,

  },
  text1:{
    color:'red',
    textAlign: 'center',
    fontSize: 18,
  },
  textcontainer1:{
    top:350,
    textAlign: 'center',
  },
  textcontainer2:{
    top:520,
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    position: 'absolute',
    bottom: 0
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  camImage: {
    width: 70,
    height: 70
  },
  capturedImage: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100, 
    height: 150,
    borderRadius: 10, 
  },
  lineContainer: {
    ...StyleSheet.absoluteFillObject, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'flex-end', // Align lines to the bottom
  },
  lineLeft: {
    width: 2, 
    height: 350,  
    backgroundColor: 'green',
    right: 100,
    transform: [{ rotate: '-10deg' }], 
  },
  lineRight: {
    width: 2, 
    height: 350, 
    backgroundColor: 'green', 
    left: 100,
    transform: [{ rotate: '10deg' }], 
  },
  dashesContainerTop: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    top: 380, 
  },
  dashesContainerMiddle: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 580,
  },
  dashLeft: {
    width: 70, 
    height: 2,  
    backgroundColor: 'green', 
    marginRight: 10,
    borderStyle: 'dashed',
  },
  dashRight: {
    width: 70, 
    height: 2,
    backgroundColor: 'green', 
    marginLeft: 10,
    borderStyle: 'dashed', 
  },
  invisibleButtonRight: {
    width: 50,
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 5, 
    position: 'absolute', 
    bottom: 30,
    right: 30,
  },
  invisibleButtonLeft: {
    width: 50,
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 35, 
    position: 'absolute', 
    bottom: 30,
    left: 30,
  },
  invisibleButtonMiddle: { 
    width: 50,  
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 35, 
    position: 'absolute', 
    bottom: 150,
    alignSelf: 'center', 
  },
  invisibleButtonMiddleBottom: { 
    width: 50,  
    height: 50, 
    backgroundColor: 'transparent', 
    borderRadius: 35, 
    position: 'absolute', 
    bottom: 30,
    alignSelf: 'center', 
  },
});

export default HomePage; 
