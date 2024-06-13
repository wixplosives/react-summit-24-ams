import { createBoard } from '@wixc3/react-board';
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { FluentDemo } from '../../../components/fluent-demo/fluent-demo';

export default createBoard({
    name: '3. FluentDemo',
    Board: () => (
        <FluentProvider theme={webLightTheme}>
            <FluentDemo />
        </FluentProvider>
    ),
    readyToSnapshot: () => new Promise((resolve) => setTimeout(resolve, 3000)),
    environmentProps: {
        windowHeight: 300,
        windowWidth: 880,
        canvasWidth: 850,
        canvasHeight: 37,
    },
});
