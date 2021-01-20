import styles from "./Loader.module.css";

const Loader = () =>{
    return (
        <div data-testid="loader" className={styles.Loader}>
            <div></div>
            <div></div>
        </div>
    )
};

export default Loader;