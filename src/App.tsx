import React, { useState } from 'react';
import { AppRoot, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { MainComponent } from './Components/MainComponent';
import { Modal } from './Components/Modal';
import { IVegetable } from './types';

export const App = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [vegetable, setVegetable] = useState<IVegetable | null>(null);
  const closeModal = () => {
    setActiveModal(null);
  };

  const setModal = (modal: string, info: IVegetable | null) => {
    setActiveModal(modal);
    setVegetable(info);
  };

  return (
    <AppRoot>
      <SplitLayout modal={
        <Modal activeModal={activeModal} closeModal={closeModal} info={vegetable} />
      }>
        <SplitCol>
          <MainComponent setModal={setModal} />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
