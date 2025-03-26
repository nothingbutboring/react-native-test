import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import QuizProgressIndicator from "./QuizProgressIndicator";

type AppBarProps = {
  currentIndex: number;
  totalQuestions: number;
  onBackPress?: () => void;
  onBackClose?: () => void;
};

const QuizAppBar: React.FC<AppBarProps> = ({
  currentIndex,
  totalQuestions,
  onBackPress,
  onBackClose,
}) => {
  const getTitle = () => {
    try {
      if (currentIndex == 0 && totalQuestions == 0) return "Loading...";
      return `Step ${currentIndex + 1} of ${totalQuestions}`;
    } catch (e) {
      return "Error";
    }
  };
  return (
    <View>
      <View style={styles.container}>
        {onBackPress ? (
          <TouchableOpacity onPress={onBackPress}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} />
        )}
        <Text style={styles.title}>{getTitle()}</Text>
        {onBackClose ? (
          <TouchableOpacity onPress={onBackClose}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} />
        )}
      </View>
      <QuizProgressIndicator
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    color: "#410413",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  right: {
    minWidth: 24,
    alignItems: "flex-end",
  },
});

export default QuizAppBar;
