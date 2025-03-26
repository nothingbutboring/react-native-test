import React from "react";
import { GestureResponderEvent } from "react-native";
import QuizElement from "./QuizElement";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const QuizButton = ({ text, onPress }: Props) => {
  return (
    <QuizElement
      text={text}
      onPress={onPress}
      icon={<Icon name="navigate-next" size={20} color="#000" />}
    />
  );
};

export default QuizButton;
