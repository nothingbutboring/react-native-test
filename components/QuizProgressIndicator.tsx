import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressContainer: {
    flex: 1,
    height: 2,
    backgroundColor: "#FDD7CC",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#F63501",
  },
});

interface QuizProgressIndicatorProps {
  currentIndex: number;
  totalQuestions: number;
}

const QuizProgressIndicator = ({
  currentIndex,
  totalQuestions,
}: QuizProgressIndicatorProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

export default QuizProgressIndicator;
