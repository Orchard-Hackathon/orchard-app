export enum Vegetables {
  TOMATOES = 'tomatoes',
  CARROT = 'carrot',
  SPINACH = 'spinach',
  BROCCOLI = 'broccoli',
  CORN = 'corn',
  EGGPLANT = 'eggplant',
  HABANERO_PEPPER = 'habanero_pepper',
  CABBAGE = 'cabbage',
  BOK_CHOY = 'bok_choy',
  RADISH = 'radish',
  CUCUMBERS = 'cucumbers',
  BELL_PEPPERS = 'bell_peppers',
  BRUSSELS_SPROUTS = 'brussels_sprouts'
}

export interface IVegetable {
  picture: string;
  title: string;
  score: number;
}

export interface IQuizItem {
  question: string;
  placeholder: string;
}

export interface IPrediction {
  label: Vegetables;
  score: number;
}

export type PartialPredictions = Partial<Record<Vegetables, IPrediction>>;

export interface IVegetablesResponse {
  predictions: IPrediction[];
}

export const pictures: Record<Vegetables, string> = {
  [Vegetables.TOMATOES]: 'giphy.gif',
  [Vegetables.BELL_PEPPERS]: 'giphy.gif',
  [Vegetables.BOK_CHOY]: 'giphy.gif',
  [Vegetables.BROCCOLI]: 'giphy.gif',
  [Vegetables.CORN]: 'giphy.gif',
  [Vegetables.CABBAGE]: 'giphy.gif',
  [Vegetables.CARROT]: 'giphy.gif',
  [Vegetables.RADISH]: 'giphy.gif',
  [Vegetables.SPINACH]: 'giphy.gif',
  [Vegetables.BRUSSELS_SPROUTS]: 'giphy.gif',
  [Vegetables.CUCUMBERS]: 'giphy.gif',
  [Vegetables.EGGPLANT]: 'giphy.gif',
  [Vegetables.HABANERO_PEPPER]: 'giphy.gif',
}

export const vegetableTitles: Record<Vegetables, string> = {
  [Vegetables.TOMATOES]: 'помидор',
  [Vegetables.BELL_PEPPERS]: 'болгарский перец',
  [Vegetables.BOK_CHOY]: 'бок-чой',
  [Vegetables.BROCCOLI]: 'брокколи',
  [Vegetables.CORN]: 'кукуруза',
  [Vegetables.CABBAGE]: 'капуста',
  [Vegetables.CARROT]: 'морковка',
  [Vegetables.RADISH]: 'редиска',
  [Vegetables.SPINACH]: 'шпинат',
  [Vegetables.BRUSSELS_SPROUTS]: 'брюссельская капуста',
  [Vegetables.CUCUMBERS]: 'огурец',
  [Vegetables.EGGPLANT]: 'баклажан',
  [Vegetables.HABANERO_PEPPER]: 'перец хабанеро',
}
