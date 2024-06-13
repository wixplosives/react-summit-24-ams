import { createBoard } from '@wixc3/react-board';
import 'open-props/normalize.min.css';
import 'open-props/open-props.min.css';
import { OpenPropsDemo } from '../../../components/open-props-demo/open-props-demo';
import UserSvg from './user.svg';

export default createBoard({
    name: '1. OpenPropsDemo',
    Board: () => (
        <OpenPropsDemo
            guest={[
                {
                    guestImage: UserSvg,
                    name: 'John Doe',
                },
            ]}
            title="Login"
        />
    ),
    environmentProps: {
        windowWidth: 548,
        windowHeight: 309,
        canvasWidth: 350,
        canvasHeight: 68,
        windowBackgroundColor: '#ffffff',
    },
});
