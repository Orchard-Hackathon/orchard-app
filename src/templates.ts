import { Vegetables } from './types';

export const quiz = [
  {
    step: 1,
    question: 'Вопрос 1',
    placeholder: 'Ваш ответ 1',
  },
  {
    step: 2,
    question: 'Вопрос 2',
    placeholder: 'Ваш ответ 2',
  },
  {
    step: 3,
    question: 'Вопрос 3',
    placeholder: 'Ваш ответ 3',
  }
];

export const VegetablesResponse = {
  predictions: [
    {
      label: Vegetables.TOMATOES,
      score: 90,
    },
    {
      label: Vegetables.TOMATOES,
      score: 80,
    },
    {
      label: Vegetables.TOMATOES,
      score: 70,
    },
  ],
};
