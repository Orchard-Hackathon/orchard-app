import { Vegetables } from './types';

const defaultAnswer = 'Ваш ответ';

export const quiz = [
  {
    step: 1,
    title: 'Калорийность',
    question: 'Вам нравится, когда другие люди сыты? ',
    placeholder: defaultAnswer,
  },
  {
    step: 2,
    title: 'Выносливость',
    question: 'Вы можете расти не смотря на жару, холод и каменные джунгли?',
    placeholder: defaultAnswer,
  },
  {
    step: 3,
    title: 'Архитектура',
    question: 'У вас есть «внутренний стержень», на котором всё держится?',
    placeholder: defaultAnswer,
  },
  {
    step: 4,
    title: 'Красота',
    question: 'У вас есть «листочки», которые вы расправляете на радость всем? ',
    placeholder: defaultAnswer,
  },
  {
    step: 5,
    title: 'Скрытность',
    question: 'Вы предпочитаете расти на солнце или же в тени? ',
    placeholder: defaultAnswer,
  },
  {
    step: 6,
    title: 'Изысканность',
    question: 'В жизни вы один из элементов салата или главное блюдо?',
    placeholder: defaultAnswer,
  },
  {
    step: 7,
    title: 'Вкус',
    question: 'Вы чаще радуете или отталкиваете других?',
    placeholder: defaultAnswer,
  },
  {
    step: 8,
    title: 'Цвет',
    question: 'Каких оттенков ваше настроение чаще всего?',
    placeholder: defaultAnswer,
  },
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
