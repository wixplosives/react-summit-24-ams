import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <h2 className="text-3xl font-bold underline pb-5">Welcome to your App Component 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
        </div>
    );
}

export default App;
