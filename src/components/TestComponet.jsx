
import React from 'react';
import { useState, useReducer, useContext } from 'react';
let TestComponent = (props) => {

	let [num, setNum] = useState(0);
	let obj = useContext({
		name: 'robin',
		age: 33,
		addr: "hangzhou"
	})


	const [count, dispath] = useReducer((state, action) => {
		if (action === 'add') {
			return state + 1;
		}
		if (action === 'reduce') {
			return state <= 0 ? 0 : state -=1;;
		}
		return state;
	}, 0);

	let multiply = () => {
		setNum(num += 1)
	}
	let reduce = () => {
		setNum(num <= 0 ? 0 : num -= 1);
	}

	let renderList = (list) => {
		console.log("", list)
		return list.map(i => {
			return (
				<div>
					name:<p>{i.name}</p>
					age:<p>{i.age}</p>
					addr:<p>{i.addr}</p>
				</div>
			)
		})
	}
	return (<div>
		<h1> num： {num}</h1>
		<button onClick={multiply}>add</button>
		<button onClick={reduce}>reduce</button>
		<div>
			<h1>{count}</h1>
			<button onClick={() => { dispath("add") }}>add</button>
			<button onClick={() => { dispath("reduce") }}>reduce</button>
		</div>
	</div>)
}

export default TestComponent;