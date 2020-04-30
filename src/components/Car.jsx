import React from "react";

// const Car = () => {
// 	return <div>Car</div>;
// };
class Car extends React.Component {
	constructor() {
		super();
		this.state = {
			make: "",
			model: "",
			year: "",
			image: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	componenDidlMount() {
		fetch("")
			.then((response) => response.json())
			.then((response) => {});
	}
	render() {
		return (
			<form>
				<input
					type="text"
					value={this.state.make}
					name="make"
					placeholder="Make"
					onChange={this.handleChange}
				/>

				<input
					type="text"
					value={this.state.model}
					name="model"
					placeholder="Model"
					onChange={this.handleChange}
				/>

				<input
					type="text"
					value={this.state.year}
					name="year"
					placeholder="Year"
					onChange={this.handleChange}
				/>

				<input
					type="text"
					value={this.state.image}
					name="image"
					placeholder="Image"
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default Car;
