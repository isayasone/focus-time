import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return <>

     <View style={styles.timingButton}>
      <RoundedButton size={75} title="1" onPress={() => onChangeTime(1)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="5" onPress={() => onChangeTime(5)} />
    </View>

    <View style={styles.timingButton}>
      <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
    </View>
    <View style={styles.timingButton}>
      <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
  </>;
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
