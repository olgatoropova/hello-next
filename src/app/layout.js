import React from 'react';

import './styles.css';

function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				{children}

				<footer>{new Date().toLocaleDateString()}</footer>
			</body>
		</html>
	);
}

export default RootLayout;
