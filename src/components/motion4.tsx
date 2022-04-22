import { motion } from 'framer-motion';
import styled from 'styled-components';

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const CardDraggable = styled(motion.div)`
	width: 300px;
	height: 200px;
	background-color: rgb(230, 230, 230);
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
	width: 80px;
	height: 80px;
	background-color: rgb(50, 50, 50);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	cursor: pointer;
`;

function Motion4(): JSX.Element {
	return (
		<BoxContainer>
			Motion example 4.
			<CardDraggable>
				<Card drag dragConstraints={{ top: -70, bottom: 70, left: -120, right: 120 }} whileTap={{ scale: 0.8 }}>
					Drag
				</Card>
			</CardDraggable>
		</BoxContainer>
	);
}

export default Motion4;
