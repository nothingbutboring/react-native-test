import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type AppBarProps = {
  title: string;
  onBackPress?: () => void;
  onBackClose?: () => void;
};

const QuizAppBar: React.FC<AppBarProps> = ({
  title,
  onBackPress,
  onBackClose,
}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {onBackPress ? (
          <TouchableOpacity onPress={onBackPress}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> // placeholder to balance the layout
        )}
        <Text>{title}</Text>
        {onBackClose ? (
          <TouchableOpacity onPress={onBackClose}>
            <Icon name="close" size={24} color="#000" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> // placeholder to balance the layout
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    elevation: 4,
  },
  title: {
    color: "#000",
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
