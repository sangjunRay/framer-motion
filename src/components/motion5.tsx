import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const CardDraggable = styled(motion.div)`
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
`;

function Motion5(): JSX.Element {
	const x = useMotionValue(0);
	const transformXOffset = useTransform(x, [-120, 0, 120], ['#c77f7f', 'rgb(230,230,230)', '#4ec981']);
	return (
		<BoxContainer>
			Motion example 4.
			<CardDraggable style={{ backgroundColor: transformXOffset }}>
				<Card style={{ x }} drag="x" dragSnapToOrigin dragConstraints={{ left: -120, right: 120 }}>
					↔️
				</Card>
			</CardDraggable>
		</BoxContainer>
	);
}

export default Motion5;
