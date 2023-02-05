/*import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Button,} from 'react-native';
import { ShareImage } from './ShareImage';
import Share from 'react-native-share';



export default function App() {
  const myCustomShare = async () => {
    const shareOptions = () => {
    message : "This is a message"
    };
    try{
      const ShareResponse = await Share.open(shareOptions);
    }catch(error){
      console.log("Error =>" ,error);
    }
  };
  return (
    <View style={styles.container}>
      <Button 
      title="Left button"
      onPress={myCustomShare}/>
      <Text style={styles.headStyle}>
        Bienvenue sur notre f
        </Text>
        <ShareImage imageUrl='ttt'/>
        <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://images.unsplash.com/photo-1675430427294-8aee1da3f5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' }}
      />
  
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  }
});*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Share from 'react-native-share';

const ShareExample = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://images.unsplash.com/photo-1675430427294-8aee1da3f5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  );
  const onShare = async () => {
    try {
      const result = await Share.open({
        url: imageUrl
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image à partager : {imageUrl}</Text>
      <TouchableOpacity onPress={onShare} style={styles.button}>
        <Text style={styles.buttonText}>Partager</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

export default ShareExample;
