import React from 'react';
import { View, TouchableOpacity, Image, GestureResponderEvent } from 'react-native';

import { styles } from './styles'

type RadioButtonProps = {
  isChecked: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

function RadioButton({ isChecked, onPress }: RadioButtonProps) {
  return (
    <TouchableOpacity style={styles.wrapperRadioButton} onPress={onPress}>
      {isChecked 
        ? (
          <View style={styles.radioButtonChecked}>
            <Image
              style={styles.radioButtonCheckedImg}
              source={require('../../../assets/home/checked_icon.png')}
            />
          </View>
        ) : <View style={styles.radioButtonUnChecked} /> 
      }
    </TouchableOpacity> 
  )
}

export default RadioButton;