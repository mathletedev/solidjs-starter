import { Component, createSignal, onCleanup } from "solid-js";

export default (() => {
	const [value, setValue] = createSignal(0);

	const timer = setInterval(() => setValue(value() + 1), 1000);
	onCleanup(() => clearInterval(timer));

	return (
		<>
			<div>Value: {value()}</div>
			<button onClick={() => setValue(value() + 1)}>Increment!</button>
		</>
	);
}) as Component;
