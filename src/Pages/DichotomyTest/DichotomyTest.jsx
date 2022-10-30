import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import { ColorBox } from "../../Components/branded";
import { HeaderText } from "../../Components/branded";
import colorPathData from "../../Utils/colorPathData.json";

function DichotomyTest() {
	const [stepCount, setStepCount] = React.useState(0);
	const [colorPath, setColorPath] = React.useState("");
	const [upperBoxColor, setUpperBoxColor] = React.useState({
		red: "0",
		green: "255",
		blue: "0",
		waveLength: "",
	});
	const [lowerBoxColor, setLowerBoxColor] = React.useState({
		red: "255",
		green: "0",
		blue: "0",
		waveLength: "",
	});
	const [removeTopic, setRemoveTopic] = React.useState(false);

	React.useEffect(() => {
		colorPath === "green" &&
			setLowerBoxColor(colorPathData.greenPicked[stepCount]);

		colorPath === "red" && setLowerBoxColor(colorPathData.redPicked[stepCount]);
	}, [stepCount]);

	React.useEffect(() => {
		setTimeout(function () {
			if (colorPath !== "") {
				setRemoveTopic(true);
			}
		}, 350);
	}, [colorPath]);

	return (
		<DichotomyLayout>
			<NavbarPlace topic="DICHOTOMY" test="dichotomy" />

			<Header h={colorPath === "" ? 170 : 0} remove={removeTopic}>
				<HeaderText>Pick stronger color</HeaderText>
			</Header>

			<UpperColorBox
				red={upperBoxColor.red}
				green={upperBoxColor.green}
				blue={upperBoxColor.blue}
				onClick={() => {
					if (colorPath === "") {
						setColorPath("green");
						console.log("green");
						setLowerBoxColor(colorPathData.greenPicked[stepCount]);
					} else {
						if (colorPath === "green") {
							stepCount < colorPathData.greenPicked.length - 1 &&
								setStepCount((prev) => prev + 1);
							console.log(colorPathData.greenPicked.length);
						} else {
							stepCount < colorPathData.redPicked.length - 1 &&
								setStepCount((prev) => prev + 1);
						}
					}
				}}
			>
				<OuterCircle />
				<InnerCircle />
			</UpperColorBox>

			<LowerColorBox
				red={lowerBoxColor.red}
				green={lowerBoxColor.green}
				blue={lowerBoxColor.blue}
				onClick={() => {
					if (colorPath === "") {
						setColorPath("red");
						console.log("red");
						setUpperBoxColor({
							red: "255",
							green: "0",
							blue: "0",
							waveLength: "",
						});
						setLowerBoxColor(colorPathData.redPicked[stepCount]);
					} else {
						stepCount > 0 && setStepCount((prev) => prev - 1);
					}
				}}
			>
				<OuterCircle />
				<InnerCircle />
				<TextWaveLangth>
					{colorPath === "red"
						? colorPathData.redPicked[stepCount].waveLength
						: colorPathData.greenPicked[stepCount].waveLength}
				</TextWaveLangth>
			</LowerColorBox>
		</DichotomyLayout>
	);
}

export default DichotomyTest;

const DichotomyLayout = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 100vw;
	grid-template-rows: var(--navbar-height) auto 1fr 1fr;
	grid-template-areas:
		" navbar "
		" header "
		" upper-color "
		" lower-color ";
`;

const NavbarPlace = styled(Navbar)`
	grid-area: navbar;
`;

const Header = styled.div`
	grid-area: header;
	display: flex;
	flex-direction: row;
	place-items: center;
	height: ${(props) => props.h}px;
	opacity: ${(props) => (props.h === 0 ? 0 : 1)};
	display: ${(props) => props.remove && "none"};
	transition: height 350ms ease-in-out;
`;

const UpperColorBox = styled(ColorBox)`
	grid-area: upper-color;
	place-items: center;
`;

const LowerColorBox = styled(ColorBox)`
	grid-area: lower-color;
	place-items: center;
`;

const OuterCircle = styled.div`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	border: solid 20px #000;
	position: relative;
`;

const InnerCircle = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: solid 10px #000;
	position: absolute;
`;

const TextWaveLangth = styled.div`
	position: absolute;
	transform: rotate(90deg);
	right: 0px;
	font-size: 45px;
`;
