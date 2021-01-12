import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export const Home = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="traffic-light">
				<div
					className={color === "red" ? "redOn" : "redOff"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowOn" : "yellowOff"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenOn" : "redOff"}
					onClick={() => setColor("green")}
				/>
			</div>
		</>
	);
};
