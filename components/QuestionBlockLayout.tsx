import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    padding: 16,
  },
});

interface QuestionBlockLayoutProps {
  title: string;
  children?: React.ReactNode;
}

const QuestionBlockLayout = ({ title, children }: QuestionBlockLayoutProps) => {
  return (
    <>
      <Text style={styles.header}>{title}</Text>
      {children}
    </>
  );
};

export default QuestionBlockLayout;
