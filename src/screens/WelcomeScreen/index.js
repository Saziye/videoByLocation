import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={'#197278'} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Youtube Videos by Location</Text>
        <Text style={styles.subTitleText}>choose a location</Text>
        <Text style={styles.titleText}>Find Videos</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assests/images/welcome.png')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.replace('Map')} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#197278',
  },
  textContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 150,
  },
  titleText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 20,
  },
  subTitleText: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '300',
    fontSize: 14,
  },
  imageContainer:{
    position:'absolute',
    top:250,
    alignSelf:'center',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'stretch',
    borderRadius:500
  },
  buttonText: {
    color: '#C44536',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: Platform.OS == 'ios' ? 30 : 50,
    borderBottomRightRadius: 0,
    height: 60,
    width: 150,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});
