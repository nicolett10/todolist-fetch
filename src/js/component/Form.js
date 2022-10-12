import React, { useState, useEffect } from "react";
import Task from "./Task.js";


function Form() {
	const [item, setItem] = useState();
	const [list, setList] = useState([]);
	const changeHandler = e => {
		setItem(e.target.value); 
	};
	const Additem = () => {


		if (item.trim() != "" && item != null) {
			setList([...list, { label: item, done: true }]); //va a ir añadiendo los nuevos items empujando en la lista los que ya existan. Nos saca la lista actualizada.
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/nicolett10",
				{
					method: "PUT",
					body: JSON.stringify(list), //lo que le mando  a la base de datos
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
				.then(resp => {
					return resp.json();
				})
				.then(data => {
					console.log(itemList)
				})
				.catch(error => { });
			setItem.setList; 
		}
	};

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/nicolett10" 
		)
			.then(response => response.json())
			.then(responseJSON => {
				setList(responseJSON);
			});
	}, []);

	const deleteAll = () => {
		setList([
			{
				label: "",
				done: false
			}
		]);

		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/nicolett10",
			{
				method: "PUT",
				body: JSON.stringify(),
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => { })
			.catch(error => { });
	};
	return (
		<div className="Container">
			<div className="Body">
				<div className="Title">
					<input
						placeholder="Add task"
						value={item}
						onChange={changeHandler}
					/>
					<button className="btn-item" onClick={Additem}>
						<i className="fas fa-plus" />
					</button>
				</div>
			</div>
			<div>
				<Task list={list} setList={setList} />
			</div>
			<div className="task-list">
				<p>
					{list.length == 0 ? 0 : list.length} Tasks left
				</p>
			</div>
			<div className="buttonDelete">
				<button
					id="btn-delete"
					onClick={() => {
						deleteAll();
					}}
					className="btn-info">
					Delete all
				</button>
			</div>
		</div>
	);
}

export default Form;