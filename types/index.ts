export type QuestionType = "single" | "multiple" | "info";

export type Option = {
  label: string;
  value: string;
  custom?: {
    deselectAll?: boolean;
  };
};

export type Question = {
  type: QuestionType;
  label: string;
  key: string;
  options?: Option[];
  description?: string;
};

export type QuestionnaireData = {
  name: string;
  slug: string;
  questions: Question[];
};

export type MockData = {
  data: QuestionnaireData;
};
