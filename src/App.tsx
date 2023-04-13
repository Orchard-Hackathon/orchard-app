import React from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  PanelHeader,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { MainComponent } from './Components/MainComponent';

export const App = () => {
  return (
    <AppRoot>
      <SplitLayout>
        <SplitCol>
          <MainComponent />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
