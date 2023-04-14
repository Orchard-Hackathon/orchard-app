import { Avatar, Button, Group, Header, RichCell } from '@vkontakte/vkui';
import { IVegetable } from '../../types';
import { Icon20ShareOutline } from '@vkontakte/icons';
import { getPercents } from '../../utils';

interface IResults {
  vegetables: IVegetable[];
  share: (vegetable: IVegetable) => void;
}
export const Results = ({ vegetables, share }: IResults) => {
  if (!vegetables.length) {
    return null;
  }
  return (
    <Group header={<Header>Ваши вероятные предки</Header>} style={{ width: '100%' }}>
      {
        vegetables.map((vegetable, index) => {
          return (
            <Group mode="plain" key={index}>
              <RichCell
                before={<Avatar size={120} src={vegetable.picture} />}
                subhead={`Точность: ${getPercents(vegetable.score)}`}
                actions={
                  <Button
                    onClick={() => share(vegetable)}
                    mode="primary"
                    before={<Icon20ShareOutline />}
                    size="l"
                  >
                    Поделиться
                  </Button>
                }
                disabled
              >
                {vegetable.title.toUpperCase()}
              </RichCell>
            </Group>
          );
        })
      }
    </Group>
  );
};
