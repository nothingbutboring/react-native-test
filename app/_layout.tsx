import { Stack } from "expo-router";
import { QuizProvider } from "../context/quizContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="quiz" />
          <Stack.Screen name="results" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QuizProvider>
    </ThemeProvider>
  );
}
