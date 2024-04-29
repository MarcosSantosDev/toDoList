import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import RadioButton from '../RadioButton'

import { styles } from './styles'

type ListItemProps = {
  isCompleted: boolean;
  id: number;
  label: string;
  onCompleteItem: (id: number) => void;
  onRemoveItem: (id: number) => void;
}

function ListItem({ isCompleted = false, id, label = '', onCompleteItem, onRemoveItem }: ListItemProps) {
  return (
    <View style={styles.container}>
      <RadioButton isChecked={isCompleted} onPress={() => onCompleteItem(id)}  />

      <View style={styles.wrapperText}>
        <Text style={{...styles.normalText, ...(isCompleted ? styles.textWithCompletedProgress : {})}}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.wrapperRemoveButton} onPress={() => onRemoveItem(id)}>
        <Image
          style={styles.removeButtonCheckedImg}
          source={require('../../../assets/home/trash_icon.png')}
        />
      </TouchableOpacity> 
    </View>
  );
}

ListItem.Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

export default ListItem;