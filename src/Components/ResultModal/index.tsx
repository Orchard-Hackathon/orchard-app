import { IVegetable } from '../../types';
import { Button, Gallery, Image, ModalCard, Text, ButtonGroup, useAppearance } from '@vkontakte/vkui';
import { MAIN_MODAL } from '../Modal';
import styles from './ResultModal.module.css';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { getPercents } from '../../utils';

interface IResultModal {
  id: string;
  vegetables: IVegetable[];
  closeModal: () => void;
  share: (vegetable: IVegetable) => void;
}

export const ResultModal = ({ vegetables, closeModal, share }: IResultModal) => {
  const appearance = useAppearance();
  return (
    <ModalCard
      id={MAIN_MODAL}
      header="Результаты"
      subheader="Вы, конечно, произошли от Homo Habilis, но мы нашли интересные результаты в вашем геноме!"
      actions={
        <ButtonGroup stretched mode="vertical" gap="s">
          <Button stretched onClick={closeModal}>Понятно!</Button>

        </ButtonGroup>
    }
      onClose={closeModal}
    >
      <Gallery
        slideWidth="100%"
        showArrows
        bullets={appearance === 'light' ? 'dark' : 'light'}
      >
        {
          vegetables.map((vegetable, index) => {
            return (
              <div key={index} className={styles.container}>
                <div>
                  <Text className={styles.text} weight="1">Предок:</Text>{" "}
                  <Text className={styles.text}>{vegetable.title}</Text>
                </div>
                <div className={styles.info}>
                  <Text className={styles.text} weight="1">Точность:</Text>{" "}
                  <Text className={styles.text}>{getPercents(vegetable.score)}</Text>
                </div>
                <div className={styles.alignCenter}>
                  <Image borderRadius="l" size={300} src={vegetable.picture} />
                </div>
                <Button
                  onClick={() => share(vegetable)}
                  mode="secondary"
                  before={<Icon20ShareOutline />}
                >
                  Поделиться
                </Button>
              </div>
            );
          })
        }
      </Gallery>
    </ModalCard>
  );
}
