import { View, Panel } from '@vkontakte/vkui'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function MainComponent() {
  const location = useLocation();
  const [activePanel, setActivePanel] = useState('main');

  useEffect(() => {
    setActivePanel(location.pathname === '/' ? 'main' : location.pathname);
  }, [location]);

  return (
    <View activePanel={activePanel}>
      <Panel id="main">Main</Panel>
    </View>
  );
}
