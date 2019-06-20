
import React, { useState, useEffect } from 'react';

import TestComponent from '../../components/TestComponet.jsx'

let App = () => {

	let [name, setName] = useState("robin");
	useEffect(() => {
		// setName("test")
	});

	let changeName = () => {
		let tempName = name === "robin" ? "test" : "robin";
		setName(tempName)
	}
	return (
		<div>
			<h1>React hooks 学习</h1>
			<div>
				<TestComponent count={0} />
			</div>
			<h1>{name}</h1>
			<button onClick={changeName}>change name</button>
		</div >
	)
}

export default App;