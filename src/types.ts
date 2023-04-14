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
  title: string;
  placeholder: string;
  step: number;
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
  [Vegetables.TOMATOES]: 'Tomatoes.jpg',
  [Vegetables.BELL_PEPPERS]: 'Bell_peppers.jpg',
  [Vegetables.BOK_CHOY]: 'Bok_choy.jpg',
  [Vegetables.BROCCOLI]: 'Broccoli.jpg',
  [Vegetables.CORN]: 'Corn.jpg',
  [Vegetables.CABBAGE]: 'Cabbage.jpg',
  [Vegetables.CARROT]: 'Carrot.jpg',
  [Vegetables.RADISH]: 'Radish.jpg',
  [Vegetables.SPINACH]: 'Spinach.jpg',
  [Vegetables.BRUSSELS_SPROUTS]: 'Brussels_sprouts.jpg',
  [Vegetables.CUCUMBERS]: 'Cucumbers.jpg',
  [Vegetables.EGGPLANT]: 'Eggplant.jpg',
  [Vegetables.HABANERO_PEPPER]: 'Habanero_pepper.jpg',
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
