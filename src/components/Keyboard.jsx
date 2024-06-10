import styles from "../styles/Keyboard.module.css";

export function Keyboard({ handleAccount, backspace, clean, calculate }) {
	return (
		<table className={styles.keyboard}>
			<tr>
				<td>
					<button className={styles.buttons} onClick={clean}>
						C
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={backspace}>
						&larr;
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("*")}>
						x
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("/")}>
						/
					</button>
				</td>
			</tr>
			<tr>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("9")}>
						9
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("8")}>
						8
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("7")}>
						7
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("-")}>
						-
					</button>
				</td>
			</tr>
			<tr>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("6")}>
						6
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("5")}>
						5
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("4")}>
						4
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("+")}>
						+
					</button>
				</td>
			</tr>
			<tr>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("3")}>
						3
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("2")}>
						2
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount("1")}>
						1
					</button>
				</td>
				<td rowSpan={2}>
					<button
						className={styles.buttons}
						style={{ height: "136px" }}
						onClick={calculate}
					>
						=
					</button>
				</td>
			</tr>
			<tr>
				<td colSpan={2}>
					<button
						className={styles.buttons}
						style={{ width: "136px" }}
						onClick={() => handleAccount("0")}
					>
						0
					</button>
				</td>
				<td>
					<button className={styles.buttons} onClick={() => handleAccount(".")}>
						.
					</button>
				</td>
			</tr>
		</table>
	);
}
