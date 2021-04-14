import React from "react";

const ButtonSeclector = () => {
	return (
		<div className="button-selector-container">
{/* 			<div className="items-selector ">
				<span className="item--label">tower</span>
			</div>
			<div className="items-selector active">
				<span className="item--label">equipment</span>
			</div> */}

			<input
				type="radio"
				className="items-selector"
				id="item--tower"
				name="custom-selector"
				value="tower"
				defaultChecked
			/>
			<label htmlFor="item--tower" className="item">
				<span className="item--label">towers</span>
			</label>

			<input
				type="radio"
				className="items-selector"
				id="item--equipment"
				name="custom-selector"
				value="equipment"
				
			/>
			<label htmlFor="item--equipment" className="item">
				<span className="item--label">equipments</span>
			</label>
		</div>
	);
};

export default ButtonSeclector;
