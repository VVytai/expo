"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const StackClient_1 = require("./StackClient");
const Protected_1 = require("../views/Protected");
const Stack = (() => {
    if (!process.env.EXPO_PUBLIC_DISABLE_NEW_WEB_MODAL) {
        const { RouterModal, RouterModalScreen } = require('../modal/web/ModalStack');
        // The RouterModal already includes Screen and Protected via withLayoutContext
        // but we need to ensure we forward the stackRouterOverride for singular routes etc.
        return Object.assign((props) => {
            return <RouterModal {...props} UNSTABLE_router={StackClient_1.stackRouterOverride}/>;
        }, {
            Screen: RouterModalScreen,
            Protected: Protected_1.Protected,
        });
    }
    const Stack = require('./StackClient').default;
    const Screen = require('../views/Screen').Screen;
    Stack.Screen = Screen;
    return Stack;
})();
exports.Stack = Stack;
exports.default = Stack;
//# sourceMappingURL=Stack.web.js.map