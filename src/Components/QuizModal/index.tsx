import { Button, FormItem, ModalCard, Textarea, FormStatus } from '@vkontakte/vkui';
import { QUIZ_MODAL } from '../Modal';
import { useEffect, useState, useCallback } from 'react';
import { quiz } from '../../templates';
import { getInfo, getMyVegetable } from '../../utils';
import { IVegetable } from '../../types';

interface IQuizModal {
  id: string;
  question: string;
  placeholder: string;
  step: number;
  setQuizModal: (step: number) => void;
  setResultModal: (vegetables: IVegetable[]) => void;
  setLoading: (loading: boolean) => void;
  closeModal: () => void;
  launchParams: string;
}

export const QuizModal = ({
  question,
  placeholder,
  step,
  setQuizModal,
  setResultModal,
  setLoading,
  closeModal,
  launchParams,
}: IQuizModal) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [quizResult, setQuizResult] = useState<string[]>([]);

  const onButtonHandler = () => {
    setTouched(true);

    if (isValueValid()) {
      updateValues(value);
    } else {
      setError(true);
    }
  }

  const updateValues = useCallback((newValue: string)=> {
    setTouched(false);
    setValue('');
    setQuizResult((result) => ([...result, newValue]));
  }, []);

  const getResult = useCallback(async (quizResult: string[]) => {
    closeModal();
    setLoading(true);

    getMyVegetable(quizResult, launchParams)
      .then((result) => {
        const predictions = getInfo(result);
        setResultModal(predictions);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      })
  }, [setResultModal, closeModal, setLoading, launchParams]);

  const isValueValid = () => {
    return value.trim().length >= 3;
  };

  useEffect(() => {
    setTouched(false);
    if (quizResult.length === 0) {
      return;
    }

    if (step < quiz.length) {
      setQuizModal(step + 1);
    } else {
      void getResult(quizResult);
    }
  // eslint-disable-next-line
  }, [quizResult]);

  useEffect(() => {
    if (isValueValid() || !touched) {
      setError(false);
    } else {
      setError(true);
    }
  // eslint-disable-next-line
  }, [value]);

  if (!question || !placeholder) {
    return null;
  }

  return (
    <ModalCard
      id={QUIZ_MODAL}
      header={question}
    >
      {
        error && (
          <FormStatus header="Некорректное значение!" mode="error">
            Пустая или слишком короткая строка
          </FormStatus>
        )
      }
      <FormItem>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
      </FormItem>
      <FormItem>
        <Button
          stretched
          onClick={onButtonHandler}
          disabled={error}
        >
          {step < quiz.length ? 'Далее' : 'Узнать результаты'}
        </Button>
      </FormItem>
    </ModalCard>
  );
}
