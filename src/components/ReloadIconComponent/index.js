import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IconReload from 'react-native-vector-icons/AntDesign';

const ReloadIcon = ({load}) => {
  return (
    <TouchableOpacity style={styles.reloadIcon}>
      <IconReload onPress={load} name="reload1" size={20} color="#ff304f" />
    </TouchableOpacity>
  );
};

export default ReloadIcon;

const styles = StyleSheet.create({
  reloadIcon: {
    padding: 10,
    right: 8,
  },
});
