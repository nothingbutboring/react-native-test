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
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F7EFE1",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#612E3A",
    fontSize: 16,
    marginRight: 8,
  },
  icon: {
    marginLeft: 4,
  },
});

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const QuizElement = ({
  text,
  onPress,
  active = false,
  disabled = false,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.button,
        backgroundColor: active ? "#F3E7D1" : "#fff",
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={styles.buttonText}>{text}</Text>
        {icon && icon}
      </View>
    </TouchableOpacity>
  );
};

export default QuizElement;
