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
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    paddingVertical: 24,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#000",
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
  icon?: React.ReactNode;
}

const QuizElement = ({ text, onPress, active = false, icon }: Props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: active ? "yellow" : "#fff" }}
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
