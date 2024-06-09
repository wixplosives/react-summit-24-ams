import { createBoard } from '@wixc3/react-board';
import 'open-props/normalize.min.css';
import 'open-props/open-props.min.css';
import { OpenPropsDemo } from '../../../components/open-props-demo/open-props-demo';
import UserSvg from './user.svg';

export default createBoard({
    name: 'OpenPropsDemo',
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
    isSnippet: true,
    environmentProps: {
        windowWidth: 735,
        windowHeight: 300,
        canvasWidth: 602,
        canvasHeight: 68,
    },
});
