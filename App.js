import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Button,} from 'react-native';
import { ShareImage } from './ShareImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headStyle}> Partager votre crétation avec vos amis </Text>
        <Image
        style={styles.imageStyle}
        source={{ uri: 'https://myblazon.com/api/images/abfb5b4c?' }}
      />
      <ShareImage/>
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
  headStyle: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop : 160,
    marginBottom : 40
  },
  imageStyle: {
    height : 200,
    width : 200
  }
});
