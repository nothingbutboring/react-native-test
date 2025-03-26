import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  checked: boolean;
}
const CustomCheckbox = ({ checked }: Props) => {
  return (
    <View style={styles.checkboxContainer}>
      <Icon
        name={checked ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={checked ? "#6200EE" : "#999"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomCheckbox;
