import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useQuiz } from "../context/quizContext";

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

export default function QuizResultsScreen() {
  const { answers } = useQuiz();

  return (
    <>
      <SafeAreaView style={styles.background}>
        <View style={styles.padding}>
          <Stack.Screen options={{ headerShown: true }} />
          <Text style={styles.title}>Quiz results</Text>
          {Object.entries(answers).map(([key, value]) => (
            <View style={{ padding: 10 }} key={key}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{key}</Text>
              </View>
              <View>
                <Text>{value}</Text>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
