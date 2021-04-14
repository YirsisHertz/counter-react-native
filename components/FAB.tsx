import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import styles from '../styles/styles';

interface Props {
  type: string;
  handleClick: (value: number) => void;
  value: number;
}

const FAB = ({type, value, handleClick}: Props) => {
  const typeAdd = type === 'add';

  return (
    <View
      style={[
        styles.location,
        typeAdd ? styles.locationBL : styles.locationBR,
      ]}>
      <TouchableNativeFeedback
        onPress={() => handleClick(value)}
        background={TouchableNativeFeedback.Ripple('white', false, 30)}>
        <View
          style={[
            styles.btn,
            typeAdd ? styles.btnIncrement : styles.btnDecrement,
          ]}>
          <Text style={styles.text}>{typeAdd ? `+${value}` : `${value}`}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FAB;
