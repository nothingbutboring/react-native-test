import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MockApi from "../apis/api";
import { MockData } from "../types";
import QuizAppBar from "../components/QuizAppBar";
import QuestionBlock from "../components/QuestionBlock";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFFBF3",
  },
});

export default function QuizScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MockData>();

  const goToNextQuestion = () => {
    if (currentStep + 1 < (data?.data.questions.length ?? 0)) {
      setCurrentStep(currentStep + 1);
    } else {
      router.navigate("/results");
    }
  };

  const goToPrevQuestion = () => {
    currentStep > 0 && setCurrentStep(currentStep - 1);
  };

  const fetchData = async () => {
    const data = await MockApi();
    setData(data as MockData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.background}>
        <QuizAppBar
          currentIndex={currentStep}
          totalQuestions={data?.data.questions.length ?? 0}
          onBackPress={() => {
            goToPrevQuestion();
          }}
          onBackClose={() => {
            router.back();
          }}
        />
        <QuestionBlock
          question={data?.data.questions[currentStep]}
          onNextQuestion={() => {
            goToNextQuestion();
          }}
        />
      </SafeAreaView>
    </>
  );
}
