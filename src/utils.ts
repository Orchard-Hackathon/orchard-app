import {
  IPrediction,
  IVegetable,
  PartialPredictions,
  pictures,
  Vegetables,
  vegetableTitles,
} from './types';

export const getMyVegetable = (quizResult: string[], launchParams: string): Promise<IPrediction[]> => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      'https://api-orchard.panfilov.tech/classify',
      {
        method: 'POST',
        headers: {
          'x-query-params': launchParams,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'texts': quizResult,
        }),
      }
    );

    const { predicts, error } = await response.json();

    if (response.ok) {
      const uniqueVegetables = getUniqueVegetables(predicts);
      resolve(uniqueVegetables);
    } else {
      reject(new Error(error));
    }
  });
};

const getUniqueVegetables = (predicts: IPrediction[]) => {
  const uniquePredicts = predicts
    .reduce<PartialPredictions>((acc: PartialPredictions, predict) => {
      if (acc[predict.label]) {
        const score = acc[predict.label]?.score;
        acc[predict.label] = score && score > predict.score ?
          acc[predict.label] :
          predict;
      } else {
        acc[predict.label] = predict;
      }

      return acc;
    }, {});

  return Object.values(uniquePredicts);
}

export const getInfo = (predictions: IPrediction[]): IVegetable[] => {
  const info: IVegetable[] = [];

  predictions.forEach((prediction) => {
    if (isVegetable(prediction.label)) {
      info.push({
        picture: `${process.env.PUBLIC_URL}/Vegetables/${pictures[prediction.label]}`,
        title: vegetableTitles[prediction.label],
        score: prediction.score,
      });
    };
  });

  return info;
}

const isVegetable = (vegetable: Vegetables) => {
  return Object.values(Vegetables).includes(vegetable);
}

export const getPercents = (score: number) => {
  return `${(score * 100).toFixed(2)}%`;
}

export const getHostName = () => {
  const url = new URL(window.location.href);
  return url.host;
}
