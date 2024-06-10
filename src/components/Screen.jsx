import styles from "../styles/Screen.module.css";

export function Screen({ account, result }) {
	return (
		<div className={styles.screen}>
			<span className={styles.account}>{account}</span>
			<span className={styles.result}>{result}</span>
		</div>
	);
}
