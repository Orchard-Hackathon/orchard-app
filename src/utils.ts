import { IVegetable, pictures, Vegetables, vegetableTitles } from './types';

export const getMyVegetable = (vegetable: Vegetables): Promise<Vegetables> => {
  return Promise.resolve(Vegetables.TOMATO);
};

export const getInfo = (vegetable: Vegetables): IVegetable | null => {
  if (isVegetable(vegetable)) {
    return {
      picture: `${process.env.PUBLIC_URL}/Vegetables/${pictures[vegetable]}`,
      title: vegetableTitles[vegetable],
    }
  };

  return null;
}

const isVegetable = (vegetable: Vegetables) => {
  return Object.values(Vegetables).includes(vegetable);
}
