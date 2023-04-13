export enum Vegetables {
  TOMATO = 'tomato',
}

export interface IVegetable {
  picture: string;
  title: string;
}

export const pictures: Record<Vegetables, string> = {
  [Vegetables.TOMATO]: 'giphy.gif',
}

export const vegetableTitles: Record<Vegetables, string> = {
  [Vegetables.TOMATO]: 'томат',
}
