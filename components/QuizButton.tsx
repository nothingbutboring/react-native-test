import React from "react";
import { GestureResponderEvent } from "react-native";
import QuizElement from "./QuizElement";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  text: string;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const QuizButton = ({ text, disabled, onPress }: Props) => {
  return (
    <QuizElement
      text={text}
      disabled={disabled ?? false}
      onPress={onPress}
      icon={<Icon name="navigate-next" size={20} color="#000" />}
    />
  );
};

export default QuizButton;
