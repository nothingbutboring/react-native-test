import { Link, Stack, useNavigation, useRouter } from "expo-router";
import React from "react";
import { TextStyle, View, Text, Button, SafeAreaView } from "react-native";
import QuizElement from "../components/QuizElement";
import Checkbox from "../components/Checkbox";
import Icon from "react-native-vector-icons/MaterialIcons";
import QuizCheckbox from "../components/QuizCheckbox";
import QuizButton from "../components/QuizButton";
import { Question } from "../types";

export default function LandingScreen() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{ title: "Quiz" }} />
      <QuizButton
        text={"Start Quiz"}
        onPress={() => {
          router.navigate("quiz");
        }}
      />
    </>
  );
}
