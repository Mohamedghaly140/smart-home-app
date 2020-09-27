import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/logo_colors.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    width: 250,
    height: 110,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
