import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import IconReload from 'react-native-vector-icons/AntDesign';

import {colors} from '../utils/Colors';

const {SECONDARY_COLOR} = colors;

const ReloadIcon = ({load}) => {
  return (
    <TouchableOpacity style={styles.reloadIcon}>
      <IconReload
        onPress={load}
        name="reload1"
        size={20}
        color={SECONDARY_COLOR}
      />
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
