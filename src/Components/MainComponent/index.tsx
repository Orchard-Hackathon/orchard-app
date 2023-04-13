import { View, Panel, PanelHeader, FormItem, Textarea, Group, Div, FormLayout, Button } from '@vkontakte/vkui'
import { useLocation } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import { MAIN_MODAL } from '../Modal';
import { getInfo, getMyVegetable } from '../../utils';
import { IVegetable, Vegetables } from '../../types';

interface IMainComponentProps {
  setModal: (modal: string, info: IVegetable | null) => void;
};

export const MainComponent = ({ setModal }: IMainComponentProps) => {
  const location = useLocation();
  const [activePanel, setActivePanel] = useState('main');
  const [text, setText] = useState('');

  useEffect(() => {
    setActivePanel(location.pathname === '/' ? 'main' : location.pathname);
  }, [location]);

  const submitForm = (evt: FormEvent) => {
    evt.preventDefault();
    getResult(text);
  }

  const getResult = async (text: string) => {
    getMyVegetable(text as Vegetables)
      .then((result) => {
        const info = getInfo(result);
        setModal(MAIN_MODAL, info);
        setText('');
      })
      .catch((error) => console.log(error));
  }

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>Orchard Main</PanelHeader>
        <Group style={{ justifyContent: 'center' }}>
          <Div>
            <FormLayout onSubmit={submitForm}>
              <FormItem top="Опишите, какой Вы сегодня овощ?">
                <Textarea
                  value={text}
                  onChange={(evt) => setText(evt.target.value)}
                  placeholder="Я томат"
                />
              </FormItem>
              <FormItem>
                <Button stretched type="submit">Результат</Button>
              </FormItem>
            </FormLayout>
          </Div>
        </Group>
      </Panel>
    </View>
  );
}
