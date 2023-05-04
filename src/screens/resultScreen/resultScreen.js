import { SafeAreaView, StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import scale from '../../constants/responsive'

const ResultScreen = (props) => {
  const {photo} = props.route.params;
  const [resultImage, setResultImage] = useState(null);

  // async function loadModel(modelPath) {
  //   const modelUrl = `${FileSystem.DocumentDirectoryPath}${modelPath}`;
  //   await tf.ready();
  //   const model = await tf.loadGraphModel(modelUrl, {fromTFHub: false});
  //   return model;
  // }

  // async function translateImage(imagePath, model) {
  //   const image = await fetch(imagePath,{},{isBinary:true});
  //   const tensor = tf.node.decodeImage(image, 3);
  //   const input = tensor.expandDims(0);
  //   const output = await model.predict(input);
  //   const translated = output.squeeze().arraySync();
  //   const result = tf.browser.fromPixels(translated, 3);
  //   return result;
  // }

  // async function runCycleGAN() {
  //   const model = await loadModel('FilterPicture/src/models/style_vangogh.tflite');
  //   const result = await translateImage(photo, model);
  //   setResultImage(result);
  //   // Display the translated image using React Native components
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft:scale(20), marginTop:scale(40)}}>
        <Text style={styles.title}>Photo Transfer</Text>
      </View>
      <ScrollView style={{marginHorizontal:scale(30),marginTop: scale(20)}}>
        <View style={{flexDirection:'column',marginTop:scale(20),marginHorizontal:scale(20)}}>
          <Text 
          style={{fontWeight:'400',fontSize:scale(20),
          lineHeight:scale(20),color:'#744ACC'}}>Original:</Text>
          <Image source={{ uri: photo }} style={styles.photo} />
          
        </View>
        <TouchableOpacity style={styles.takePhotoButton} >
          <Text style={styles.buttonText}>Style Vangogh</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'column',marginTop:scale(20),marginHorizontal:scale(20)}}>
          <Text 
          style={{fontWeight:'400',fontSize:scale(20),
          lineHeight:scale(20),color:'#744ACC'}}>Result:</Text>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F0F6FB',
  },
  title: {
    fontWeight:'700',
    fontSize: scale(32),
    lineHeight:scale(32),
    color: '#744ACC',
  },
  photo: {
    width: '100%',
    height: scale(300),
    resizeMode: 'contain',
    marginVertical: scale(20),
  },
  takePhotoButton: {
    marginTop:scale(20),
    height:scale(70),
    paddingLeft:scale(30),
    justifyContent:'center',
    backgroundColor:'#744ACC',
    borderRadius:scale(20),
},
buttonText: {
  fontWeight:'400',
  fontSize: scale(18),
  lineHeight:scale(18),
  color: '#F0F6FB',
},
})