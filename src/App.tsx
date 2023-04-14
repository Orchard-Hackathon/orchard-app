import React, { useState } from 'react';
import { AppRoot, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { MainComponent } from './Components/MainComponent';
import { MAIN_MODAL, Modal, QUIZ_MODAL } from './Components/Modal';
import { IQuizItem, IVegetable } from './types';
import { quiz } from './templates';
import { ReactNode, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

export const App = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [vegetables, setVegetables] = useState<IVegetable[]>([]);
  const [quizStep, setQuizStep] = useState(1);
  const [quizInfo, setQuizInfo] = useState<IQuizItem>(quiz[quizStep - 1]);
  const [popout, setPopout] = useState<ReactNode | null>(null);
  const [launchParams, setLaunchParams] = useState('');

  const closeModal = () => {
    setActiveModal(null);
  };

  const setResultModal = (vegetables: IVegetable[]) => {
    setVegetables(vegetables);
    setActiveModal(MAIN_MODAL);
  };

  const setQuizModal = (quizStep: number) => {
    setQuizStep(quizStep);
    setQuizInfo(quiz[quizStep - 1]);
    setActiveModal(QUIZ_MODAL);
  };

  const share = (vegetable: IVegetable) => {
    setLoading(true);
    bridge
      .send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: `https://user209318348-ko7wvnxm.wormhole.vk-apps.com/${vegetable.picture}`,
        attachment: {
          type: 'url',
          url: 'https://vk.com/app51613540',
          text: 'go_to',
        }
      })
      .then(() => setPopout(<ScreenSpinner state="done" />))
      .catch((error) => {
        console.log(error);
        setPopout(<ScreenSpinner state="error" />);
      })
      .finally(() => {
        setTimeout(() => {
          setPopout(null);
        }, 1000);
      })
  }

  const setLoading = (loading: boolean) => {
    setPopout(loading ? <ScreenSpinner state="loading" /> : null);
  }

  useEffect(() => {
    bridge.send('VKWebAppGetLaunchParams')
      .then((data) => {
        if (data.vk_app_id) {
          setLaunchParams(
            Object
              .entries(data)
              .map(([key, value]) => `${key}=${value}`)
              .join('&')
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppRoot>
      <SplitLayout
        modal={
          <Modal
            activeModal={activeModal}
            closeModal={closeModal}
            vegetables={vegetables}
            step={quizStep}
            quizItem={quizInfo}
            setResultModal={setResultModal}
            setQuizModal={setQuizModal}
            setLoading={setLoading}
            share={share}
            launchParams={launchParams}
          />
        }
        popout={popout}
      >
        <SplitCol>
          <MainComponent
            startQuiz={() => setQuizModal(1)}
            vegetables={vegetables}
            share={share}
          />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
