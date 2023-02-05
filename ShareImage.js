import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

export const ShareImage = ({ imageUrl }) => {
  const shareImage = () => {
    Linking.openURL(`instagram://share?image=${encodeURIComponent(imageUrl)}`);
  };

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <TouchableOpacity onPress={shareImage}>
        <Text>Partager sur Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

