import { createBoard } from '@wixc3/react-board';
import { TailwindDemo } from '../../../components/tailwind-demo/tailwind-demo';

export default createBoard({
    name: 'TailwindDemo',
    Board: () => <TailwindDemo />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 567,
        windowWidth: 928,
        windowHeight: 594,
    },
});
