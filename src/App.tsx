import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import FramerSlider from './components/framer-slider';
import Motion1 from './components/motion1';
import Motion2 from './components/motion2';
import Motion3 from './components/motion3';
import Motion4 from './components/motion4';
import Motion5 from './components/motion5';
import Motion6 from './components/motion6';

const Container = styled.section`
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem;
	padding: 5rem;
`;

const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	padding: 3rem;
	flex-direction: column;
`;

const HeaderFont1 = styled.h1`
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

const HeaderFont2 = styled.p`
	font-size: 1rem;
`;

const Globalstyled = createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* {
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function App() {
	return (
		<>
			<Header>
				<HeaderFont1>framer-motion practice!👏🏻</HeaderFont1>
				<HeaderFont2>create by sangjunray</HeaderFont2>
			</Header>
			<Container>
				<Globalstyled />
				<Motion1 />
				<Motion2 />
				<Motion3 />
				<Motion4 />
				<Motion5 />
				<Motion6 />
			</Container>
			<FramerSlider />
		</>
	);
}

export default App;
