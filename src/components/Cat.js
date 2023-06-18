import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    height: 360,
    width: 360,
  },
});
const DisplayACatImage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20220620/ourmid/pngtree-pink-cute-cat-icon-animal-png-yuri-png-image_5230763.png',
        }}
      />
    </View>
  );
};
export default DisplayACatImage;
