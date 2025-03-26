import React from "react";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F63501",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    elevation: 8,
    borderEndEndRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const NextButton = ({ text, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ ...styles.button, opacity: disabled ? 0.5 : 1 }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.button}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
