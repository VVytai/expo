import { ComponentProps } from 'react';

import { stackRouterOverride } from './StackClient';
import { Protected } from '../views/Protected';

const Stack = (() => {
  if (!process.env.EXPO_PUBLIC_DISABLE_NEW_WEB_MODAL) {
    const { RouterModal, RouterModalScreen } = require('../modal/web/ModalStack');
    // The RouterModal already includes Screen and Protected via withLayoutContext
    // but we need to ensure we forward the stackRouterOverride for singular routes etc.
    return Object.assign(
      (props: ComponentProps<typeof RouterModal>) => {
        return <RouterModal {...props} UNSTABLE_router={stackRouterOverride} />;
      },
      {
        Screen: RouterModalScreen,
        Protected,
      }
    );
  }
  const Stack = require('./StackClient').default;
  const Screen = require('../views/Screen').Screen;
  Stack.Screen = Screen;
  return Stack;
})();

export { Stack };

export default Stack;
