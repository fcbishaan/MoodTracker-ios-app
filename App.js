import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './compoonents/Button';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './compoonents/ImageViewer';
import {useState} from 'react';
 
const PlaceholderImage = require ('./assets/images/back.png');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
    }else{
      alert('you do not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style = {styles.imageContainer}> 
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label ="Choose a photo" onPress={pickImageAsync} />
      <Button label = "Use this photo"></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
