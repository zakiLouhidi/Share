import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Share from 'react-native-share';

export const ShareImage = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://myblazon.com/api/images/abfb5b4c?'
  );
  const onShare = async () => {
    try {
      const result = await Share.open({
        url: imageUrl
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
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
    marginBottom: 40
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 5,
    marginBottom: 80
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

