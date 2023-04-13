import { ModalCard, ModalRoot, Button, Image } from '@vkontakte/vkui';
import { IVegetable } from '../../types';

export const MAIN_MODAL = 'main_modal';

interface IModalProps {
  activeModal: string | null;
  closeModal: () => void;
  info: IVegetable | null;
}

export const Modal = ({ activeModal, closeModal, info}: IModalProps) => {
  return (
    <ModalRoot activeModal={activeModal} onClose={closeModal}>
      <ModalCard
        id={MAIN_MODAL}
        header={info ? `Сегодня Вы ${info.title}!` : "Все понятно!"}
        subheader="А я слива лиловая!"
        actions={
          <Button stretched onClick={closeModal}>Понятно!</Button>
        }
        onClose={closeModal}
      >
        {info && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '15px' }}>
            <Image borderRadius="l" size={96} src={info.picture} />
          </div>
        )}
      </ModalCard>
    </ModalRoot>
  );
}
