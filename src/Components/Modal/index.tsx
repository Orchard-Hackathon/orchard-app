import { ModalRoot } from '@vkontakte/vkui';
import { IQuizItem, IVegetable } from '../../types';
import { QuizModal } from '../QuizModal';
import { ResultModal } from '../ResultModal';

export const MAIN_MODAL = 'main_modal';
export const QUIZ_MODAL = 'quiz_modal';

interface IModalProps {
  activeModal: string | null;
  closeModal: () => void;
  vegetables: IVegetable[];
  step: number;
  quizItem: IQuizItem;
  setResultModal: (vegetables: IVegetable[]) => void;
  setQuizModal: (quizStep: number) => void;
  setLoading: (loading: boolean) => void;
  share: (vegetable: IVegetable) => void;
  launchParams: string;
}

export const Modal = ({
  activeModal,
  closeModal,
  vegetables,
  step,
  quizItem,
  setResultModal,
  setQuizModal,
  setLoading,
  share,
  launchParams,
}: IModalProps) => {
  return (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <QuizModal
        id={QUIZ_MODAL}
        step={step}
        question={quizItem.question}
        placeholder={quizItem.placeholder}
        title={quizItem.title}
        setResultModal={setResultModal}
        setQuizModal={setQuizModal}
        setLoading={setLoading}
        closeModal={closeModal}
        launchParams={launchParams}
      />
      <ResultModal
        id={MAIN_MODAL}
        vegetables={vegetables}
        closeModal={closeModal}
        share={share}
      />
    </ModalRoot>
  );
}
