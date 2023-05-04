import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Platform, ScrollView } from 'react-native'
import React,{useState} from 'react'
// import FONT_FAMILY from '../../constants/fonts'
import scale from '../../constants/responsive'
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const HomeScreen = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [photo, setPhoto] = useState(null);


    const takePhoto = async () => {
        if (cameraRef) {
          const photo = await cameraRef.takePictureAsync();
          setPhoto(photo.uri);
        }
    };

    const pickPhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
        if (!result.canceled) {
          setPhoto(result.assets[0].uri);
        }
      };


  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginLeft:scale(20), marginTop:scale(40)}}>
            <Text style={styles.title}>Photo Transfer</Text>
        </View>

        <ScrollView style={{marginHorizontal:scale(30),marginTop: scale(20)}}>

                {/* <Camera style={styles.camera} ref={ref => setCameraRef(ref)} /> */}
                <TouchableOpacity style={styles.takePhotoButton} onPress={pickPhoto}>
                    <Text style={styles.buttonText}>Gallery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.takePhotoButton} onPress={takePhoto}>
                    <Text style={styles.buttonText}>Camera</Text>
                </TouchableOpacity>
                
                <View style={{marginTop:scale(20),flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity style={styles.subButton}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subButton}>
                        <Text style={styles.buttonText}>Rating</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'column',marginTop:scale(20)}}>
                    <Text style={{fontWeight:'400',fontSize:scale(20),lineHeight:scale(20),color:'#744ACC'}}>Review your image:</Text>
                    <Image source={{ uri: photo }} style={styles.photo} />
                    <TouchableOpacity style={styles.viewResultButton} 
                    onPress={() => {props.navigation.navigate('ResultScreen', {photo:photo}
                        )}}>
                        <Text style={styles.buttonText}>View Result</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
        
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F0F6FB',
    },
    camera: {
        width: '100%',
        height: '80%',
      },
      photo: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
        marginVertical: scale(10),
      },
    title: {
        fontWeight:'700',
        fontSize: scale(32),
        lineHeight:scale(32),
        color: '#744ACC',
    },
    takePhotoButton: {
        marginTop:scale(20),
        height:scale(70),
        paddingLeft:scale(30),
        justifyContent:'center',
        backgroundColor:'#744ACC',
        borderRadius:scale(20),
    },
    viewResultButton: {
        // marginTop:scale(20),
        height:scale(50),
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#744ACC',
        borderRadius:scale(20),
    },
    subButton: {
        width:scale(150),
        height:scale(50),
        paddingLeft:scale(15),
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