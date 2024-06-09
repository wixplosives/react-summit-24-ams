import { createBoard } from '@wixc3/react-board';
import { FluentProvider, webLightTheme, webDarkTheme } from '@fluentui/react-components';
import { FluentDemo } from '../../../components/fluent-demo/fluent-demo';

export default createBoard({
    name: 'FluentDemo',
    Board: () => (
        <FluentProvider theme={webDarkTheme}>
            <FluentDemo />
        </FluentProvider>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1000,
        windowHeight: 600,
    },
});
