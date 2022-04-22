import { motion } from 'framer-motion';
import styled from 'styled-components';

const BoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-self: center;
`;

const Card = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 300px;
	height: 200px;
	background-color: rgb(50, 50, 50);
	color: white;
	border-radius: 10px;
	padding: 1rem;
	margin-top: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
	cursor: pointer;
`;

const cardVariants = {
	hover: { rotateZ: 180 },
	click: { rotateZ: 360, backgroundColor: 'rgb(104, 194, 119)' },
};

function Motion3(): JSX.Element {
	return (
		<BoxContainer>
			Motion example 3.
			<Card variants={cardVariants} whileHover="hover" whileDrag="drag" whileTap="click">
				gesture motion (hover & click)
			</Card>
		</BoxContainer>
	);
}

export default Motion3;
