import styles from './open-props-demo.module.scss';

export interface OpenPropsDemoProps {
    title: string;
    guest: Array<{
        name: string;
        guestImage?: string;
    }>;
    date?: string;
    className?: string;
}

export const OpenPropsDemo: React.FC<OpenPropsDemoProps> = ({
    title = 'Title',
    guest = [{ name: 'Joe' }],
    date = new Date().toLocaleDateString(),
}) => {
    return (
        <div className={styles.card}>
            <div>{date}</div>
            <div>{title}</div>
            <div className={styles.guest}>
                <img src={guest[0].guestImage} alt={guest[0].name} height={40} width={40} />
                <p>{guest[0].name}</p>
            </div>
        </div>
    );
};
