



const colors = {
	dark: '#000000',
	darkFontColor: '#ffffff'
}


const styles = {
	container: {
		margin: '0 auto',
		maxWidth: '1200px',
		'@media (min-width: 540px)': {
			maxWidth: '540px'
		},
		'@media (min-width: 720px)': {
			maxWidth: '720px'
		},
		'@media (min-width: 960px)': {
			maxWidth: '960px'
		},
	},
	darkBackground: {
		backgroundColor: colors.dark
	},
	paragraph: {
		fontSize: '20px',
		lineHeight: '30px'
	},
	headline1: {
		fontSize: '48px',
	}
}

export default { styles, colors };