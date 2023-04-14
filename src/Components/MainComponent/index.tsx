import {
  View,
  Panel,
  PanelHeader,
  Group,
  Div,
  Button,
  ButtonGroup,
  CellButton,
  Avatar
} from '@vkontakte/vkui';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IVegetable } from '../../types';
import { Results } from '../Results';
import { Icon56HandPointUpLeftOutline } from '@vkontakte/icons';

interface IMainComponentProps {
  startQuiz: () => void;
  vegetables?: IVegetable[];
  share: (vegetable: IVegetable) => void;
};

export const MainComponent = ({ startQuiz, vegetables, share }: IMainComponentProps) => {
  const location = useLocation();
  const [activePanel, setActivePanel] = useState('main');

  useEffect(() => {
    setActivePanel(location.pathname === '/' ? 'main' : location.pathname);
  }, [location]);

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Какой ты сегодня овощ?</PanelHeader>
        <Group style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: vegetables?.length ? 'flex-start' : 'center',
          alignItems: 'center'
        }}>
          {
            vegetables && <Results share={share} vegetables={vegetables} />
          }
          <Div style={{ textAlign: 'center', maxWidth: '500px' }}>
            <ButtonGroup mode="vertical" stretched>
              {
                vegetables?.length ? (
                  <Button
                    stretched
                    onClick={startQuiz}
                    size="l"
                  >
                    Перепроверить результаты
                  </Button>
                ) : (
                  <CellButton
                    style={{ paddingTop: '10px', paddingBottom: '10px' }}
                    onClick={startQuiz}
                    before={
                      <Avatar withBorder={false} size={80}>
                        <Icon56HandPointUpLeftOutline />
                      </Avatar>
                    }
                  >
                    Узнать о себе всё!
                  </CellButton>
                )
              }
            </ButtonGroup>
          </Div>
        </Group>
      </Panel>
    </View>
  );
}
