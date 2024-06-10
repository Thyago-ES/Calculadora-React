import { useEffect, useState } from "react";

import { Keyboard } from "./Keyboard";
import { Screen } from "./Screen";

import styles from "../styles/Calculator.module.css";

export function Calculator() {
	const [account, setAccount] = useState("");
	const [result, setResult] = useState(0);
	const [dotCount, setDotCount] = useState(0);
	const operators = ["+", "-", "*", "/", "."];

	const handleAccount = (value) => {
		if (operators.includes(value) && operators.includes(account.slice(-1))) {
			alert("Dois símbolos consecutivos!");
			return;
		}

		if (operators.slice(2, 5).includes(value) && account === "") {
			alert("Operador inválido!");
			return;
		}

		if (operators.slice(0, 4).includes(value)) {
			handleDotCount(0);
		}

		if (value === ".") {
			if (dotCount === 1) {
				alert("Decimal já existe!");
				return;
			} else {
				handleDotCount(1);
			}
		}

		setAccount((previousValue) => previousValue + value);
	};

	useEffect(() => {
		try {
			if (account) {
				setResult(eval(account));
			} else {
				setResult(0);
			}
		} catch (error) {
			setResult("");
		}
	}, [account]);

	const backspace = () => {
		if (account.slice(-1) === ".") {
			handleDotCount(0);
		}

		setAccount(account.slice(0, -1));
	};

	const clean = () => {
		setAccount("");
		setResult(0);
		handleDotCount(0);
	};

	const calculate = () => {
		if (result) {
			setAccount(result);
		}
	};

	const handleDotCount = (num) => {
		setDotCount(num);
	};

	return (
		<main className={styles.calculator}>
			<Screen account={account} result={result} />
			<Keyboard
				account={account}
				handleAccount={handleAccount}
				backspace={backspace}
				clean={clean}
				calculate={calculate}
			/>
		</main>
	);
}
