import { createBoard } from '@wixc3/react-board';
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { FluentDemo } from '../../../components/fluent-demo/fluent-demo';

export default createBoard({
    name: 'FluentDemo',
    Board: () => (
        <FluentProvider theme={webLightTheme}>
            <FluentDemo />
        </FluentProvider>
    ),
    isSnippet: true,
    readyToSnapshot: () => new Promise((resolve) => setTimeout(resolve, 4000)),
    environmentProps: {
        windowWidth: 1000,
        windowHeight: 300,
    },
});
