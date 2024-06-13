import { createBoard } from '@wixc3/react-board';
import { TailwindDemo } from '../../../components/tailwind-demo/tailwind-demo';
import '../../../index.css';

export default createBoard({
    name: '2. TailwindDemo',
    Board: () => <TailwindDemo />,
    environmentProps: { windowWidth: 660, windowHeight: 358, canvasWidth: 550, canvasHeight: 327 },
});
