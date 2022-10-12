import React from "react";
import Form from "./Form.js";
import PropTypes from "prop-types";
import "../../styles/index.css";


function Home() {
	return (
		<div className="text-center mt-5 col-sm-6">
			<h1>To Do List</h1>
			<Form />
		</div>
	);
}

export default Home;