import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
);

bridge
  .send('VKWebAppInit')
  .catch((error) => console.log(`App not init! ${error}`));
