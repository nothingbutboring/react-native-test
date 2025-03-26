import React from "react";
import { GestureResponderEvent } from "react-native";
import QuizElement from "./QuizElement";
import Checkbox from "./Checkbox";

interface Props {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  active?: boolean;
}

const QuizCheckbox = ({ text, onPress, active }: Props) => {
  return (
    <QuizElement
      text={text}
      onPress={onPress}
      active={active}
      icon={<Checkbox checked={active ?? false} />}
    />
  );
};

export default QuizCheckbox;
