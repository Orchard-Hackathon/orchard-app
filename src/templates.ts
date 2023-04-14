import { Vegetables } from './types';

const defaultAnswer = 'Ваш ответ';

export const quiz = [
  {
    step: 1,
    question: 'Привет, являюсь ли я овощем, то есть могу ли я использоваться в пищу в свежем, приготовленном или консервированном виде?',
    placeholder: defaultAnswer,
  },
  {
    step: 2,
    question: 'Расту ли я на земле или в воде, или могу быть использован для того, и для другого?',
    placeholder: defaultAnswer,
  },
  {
    step: 3,
    question: 'Имею ли я главный корень, который находится в земле, или у меня другая форма корневой системы?',
    placeholder: defaultAnswer,
  },
  {
    step: 4,
    question: 'Могу ли я иметь листья на стебле, или они находятся на других частях моего тела?',
    placeholder: defaultAnswer,
  },
  {
    step: 5,
    question: 'Предпочитаю ли я расти на солнце или в тени, или могу быть выращен в любых условиях?',
    placeholder: defaultAnswer,
  },
  {
    step: 6,
    question: 'Был ли я когда-нибудь использован в качестве компонента для салатов, или используюсь только для других блюд?',
    placeholder: defaultAnswer,
  },
  {
    step: 7,
    question: 'Могу ли я расти в теплице или только на открытом воздухе?',
    placeholder: defaultAnswer,
  },
  {
    step: 8,
    question: 'Могу ли я расти в холодных или только в теплых условиях?',
    placeholder: defaultAnswer,
  },
  {
    step: 9,
    question: 'Имею ли я сладкий или горький вкус, или могу быть использован в различных блюдах?',
    placeholder: defaultAnswer,
  },
  {
    step: 10,
    question: 'Являюсь ли я обычным компонентом для приготовления супов, или используюсь только в других блюдах?',
    placeholder: defaultAnswer,
  },
  {
    step: 11,
    question: 'Какого цвета я обычно являюсь, и как я могу быть использован в различных блюдах?',
    placeholder: defaultAnswer,
  },
  {
    step: 12,
    question: 'Расту ли я на кусте или на дереве, или могу быть использован в другой форме?',
    placeholder: defaultAnswer,
  },
  {
    step: 13,
    question: 'Можно ли меня хранить долго, или я быстро портюсь после сбора?',
    placeholder: defaultAnswer,
  },
  {
    step: 14,
    question: 'Используюсь ли я в традиционных блюдах, и если да, то в какой форме?',
    placeholder: defaultAnswer,
  },
  {
    step: 15,
    question: 'Являюсь ли я источником витаминов и питательных веществ, и если да, то какими?',
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
