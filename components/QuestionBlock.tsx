import { View, Text } from "react-native";
import QuestionBlockLayout from "./QuestionBlockLayout";
import QuizButton from "./QuizButton";
import { Question } from "../types";
import QuestionOptionsList from "./QuestionOptionsList";
import { useQuiz } from "../context/quizContext";

interface QuestionBlockProps {
  question?: Question;
  onNextQuestion: () => void;
}

const QuestionBlock = ({ question, onNextQuestion }: QuestionBlockProps) => {
  const { setAnswer } = useQuiz();
  switch (question?.type) {
    case "single":
      return (
        <QuestionBlockLayout title={question.label}>
          {question.options && (
            <QuestionOptionsList
              options={question.options}
              defautlValue={[]}
              type="single"
              onSelectAnswer={(value) => {
                setAnswer(question.key, value);
                onNextQuestion();
              }}
            />
          )}
        </QuestionBlockLayout>
      );
    case "multiple":
      return (
        <QuestionBlockLayout title={question.label}>
          {question.options && (
            <QuestionOptionsList
              options={question.options}
              type="multiple"
              onSelectAnswer={(value) => {
                setAnswer(question.key, value);
                onNextQuestion();
              }}
            />
          )}
        </QuestionBlockLayout>
      );
    case "info":
      return (
        <QuestionBlockLayout title={question.label}>
          <View style={{ padding: 16 }}>
            <Text style={{ paddingBottom: 16 }}>{question.description}</Text>
            <QuizButton
              text={"Next"}
              onPress={() => {
                setAnswer(question.key, "True");
                onNextQuestion();
              }}
            />
          </View>
        </QuestionBlockLayout>
      );
    default:
      return <Text>Unsupported question type</Text>;
  }
};

export default QuestionBlock;
