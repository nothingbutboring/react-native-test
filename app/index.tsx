import { Link, Stack, useNavigation, useRouter } from "expo-router";
import React from "react";
import {
  TextStyle,
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import QuizElement from "../components/QuizElement";
import Checkbox from "../components/Checkbox";
import Icon from "react-native-vector-icons/MaterialIcons";
import QuizCheckbox from "../components/QuizCheckbox";
import QuizButton from "../components/QuizButton";
import { Question } from "../types";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFBF3",
  },
  padding: {
    padding: 16,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default function LandingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.padding}>
        <Stack.Screen options={{ headerShown: false }} />
        <Text style={styles.title}>Quiz</Text>
        <QuizButton
          text={"Start Quiz"}
          onPress={() => {
            router.navigate("quiz");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
