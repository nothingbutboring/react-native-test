import { FlatList, View } from "react-native";
import QuizCheckbox from "./QuizCheckbox";
import QuizButton from "./QuizButton";
import { Option } from "../types";
import { useState } from "react";
import NextButton from "./NextButton";

interface QuestionOptionsListProps {
  options: Option[];
  defautlValue?: string[] | undefined;
  type: "single" | "multiple";
  onSelectAnswer: (value: string | string[]) => void;
}

const QuestionOptionsList = ({
  options,
  defautlValue,
  type,
  onSelectAnswer,
}: QuestionOptionsListProps) => {
  const [selected, setSelected] = useState<string[]>(defautlValue ?? []);
  const canContinue = selected.length > 0;
  return (
    <FlatList
      data={options}
      style={{ paddingHorizontal: 16 }}
      keyExtractor={(item) => item.value}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) =>
        type === "multiple" ? (
          <QuizCheckbox
            text={item.label}
            active={selected?.includes(item.value)}
            onPress={() => {
              if (item.custom?.deselectAll) {
                setSelected([item.value]);
                return;
              }

              setSelected((prev) => {
                if (prev.includes(item.value)) {
                  return prev.filter((v) => v !== item.value);
                }

                if (item.custom) {
                  return [...prev, item.value];
                }

                const filteredPrev = prev.filter(
                  (v) => !options.find((opt) => opt.custom)?.value?.includes(v)
                );
                return [...filteredPrev, item.value];
              });
            }}
          />
        ) : (
          <QuizButton
            text={item.label}
            onPress={() => {
              onSelectAnswer(item.value);
            }}
          />
        )
      }
      ListFooterComponent={() =>
        type === "multiple" ? (
          <View style={{ marginBottom: 30, marginTop: 10 }}>
            <NextButton
              text="Next"
              disabled={!canContinue}
              onPress={() => {
                if (canContinue) onSelectAnswer(selected);
              }}
            />
          </View>
        ) : null
      }
    />
  );
};

export default QuestionOptionsList;
