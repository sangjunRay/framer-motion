import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Window = styled(motion.div)`
	z-index: -10;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
`;

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const CardDraggable = styled(motion.div)`
	position: relative;
	width: 300px;
	height: 200px;
	background-color: rgb(220, 220, 220);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	overflow: hidden;
`;

const Line = styled.div`
	position: absolute;
	width: 80%;
	top: 50%;
	border-bottom: 6px solid rgb(100, 100, 100);
`;

const Card = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 60px;
	height: 60px;
	background-color: rgb(50, 50, 50);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	cursor: pointer;
	z-index: 10;
`;

function Motion5(): JSX.Element {
	const x = useMotionValue(0);
	const transformXOffset = useTransform(x, [-120, 0, 120], ['#c77f7f', 'rgb(255,255,255)', '#4ec981']);
	return (
		<BoxContainer>
			<Window style={{ backgroundColor: transformXOffset }} />
			Motion example 4.
			<CardDraggable>
				<Line />
				<Card style={{ x }} drag="x" dragSnapToOrigin dragConstraints={{ left: -120, right: 120 }}>
					↔️
				</Card>
			</CardDraggable>
		</BoxContainer>
	);
}

export default Motion5;
