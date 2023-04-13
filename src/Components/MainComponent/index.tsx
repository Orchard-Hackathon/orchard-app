import { View, Panel, PanelHeader, Group, Div, Button, ButtonGroup } from '@vkontakte/vkui'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IVegetable } from '../../types';
import { Results } from '../Results';

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
              <Button
                stretched
                onClick={startQuiz}
              >
                {
                  vegetables?.length ? 'Перепроверить результаты' : 'Узнать о себе всё!'
                }
              </Button>
            </ButtonGroup>
          </Div>
        </Group>
      </Panel>
    </View>
  );
}
