import { Link, Stack, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { TextStyle, View, Text, FlatList } from "react-native";
import QuizCheckbox from "../components/QuizCheckbox";
import MockApi from "../apis/api";
import { MockData, Question } from "../types";
import QuestionBlockLayout from "../components/QuestionBlockLayout";
import QuizButton from "../components/QuizButton";
import QuizAppBar from "../components/QuizAppBar";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function QuizScreen() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MockData>();

  const fetchData = async () => {
    const data = await MockApi();
    setData(data as MockData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const title = loading
    ? "Loading..."
    : `Step ${currentStep + 1} of ${data?.data.questions.length}`;
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <QuizAppBar
        title={title}
        onBackPress={() => {
          currentStep > 0 && setCurrentStep(currentStep - 1);
        }}
        onBackClose={() => {
          navigation.goBack();
        }}
      />
      <QuestionBlock question={data?.data.questions[9]} />
    </>
  );
}

interface QuestionBlockProps {
  question?: Question;
}

const QuestionBlock = ({ question }: QuestionBlockProps) => {
  switch (question?.type) {
    case "single":
      return (
        <QuestionBlockLayout title={question.label}>
          <FlatList
            data={question.options}
            style={{ padding: 16 }}
            keyExtractor={(item) => item.value}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            contentContainerStyle={{ paddingBottom: 40 }}
            renderItem={({ item }) => (
              <QuizButton text={item.label} onPress={() => {}} />
            )}
            ListFooterComponent={() => (
              <View style={{ marginTop: 20 }}>
                <QuizButton
                  text="Continue"
                  onPress={() => console.log("Continue pressed")}
                />
              </View>
            )}
          />
        </QuestionBlockLayout>
      );
    case "multiple":
      return (
        <QuestionBlockLayout title={question.label}>
          <FlatList
            data={question.options}
            style={{ padding: 16 }}
            keyExtractor={(item) => item.value}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => (
              <QuizCheckbox text={item.label} onPress={() => {}} />
            )}
            ListFooterComponent={() => (
              <View style={{ marginTop: 20 }}>
                <QuizButton
                  text="Continue"
                  onPress={() => console.log("Continue pressed")}
                />
              </View>
            )}
          />
        </QuestionBlockLayout>
      );
    case "info":
      return (
        <QuestionBlockLayout title={question.label}>
          <Text>{question.label}</Text>
          <Text>{question.description}</Text>
        </QuestionBlockLayout>
      );
    default:
      return <Text>Unsupported question type</Text>;
  }
};
