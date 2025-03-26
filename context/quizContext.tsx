import React, { createContext, useContext, useState, ReactNode } from "react";

type AnswerValue = string | string[];

type QuizAnswers = {
  [questionKey: string]: AnswerValue;
};

type QuizContextType = {
  answers: QuizAnswers;
  setAnswer: (key: string, value: AnswerValue) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const setAnswer = (key: string, value: AnswerValue) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const resetQuiz = () => {
    setAnswers({});
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
