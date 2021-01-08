import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';

const styles = {
	Palette       : {
		height        : '98vh',
		display       : 'flex',
		flexDirection : 'column',
	},
	paletteColors : {
		height : '90%',
	},
	goBack        : {
		width           : '20%',
		height          : '50%',
		margin          : '0 auto',
		display         : 'inline-block',
		position        : 'relative',
		cursor          : 'pointer',
		marginBottom    : '-3.5px',
		opacity         : '1',
		backgroundColor : 'black',
		'& a'           : {
			color          : 'white',
			width          : '100px',
			height         : '30px',
			position       : 'absolute',
			display        : 'inline-block',
			top            : '50%',
			left           : '50%',
			marginLeft     : '-50px',
			marginTop      : '-15px',
			textAlign      : 'center',
			outline        : 'none',
			background     : 'rgba(255, 255, 255, 0.3)',
			fontSize       : '1rem',
			lineHeight     : '30px',
			textTransform  : 'uppercase',
			border         : 'none',
			cursor         : 'pointer',
			textDecoration : 'none',
		},
	},
};

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		//console.log(this._shades);
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}
		// return all shades of given color
		return shades.slice(1);
	}
	render() {
		const { format } = this.state;
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[format]}
				showingFullPalette={false}
			/>
		));
		return (
			<div className={classes.Palette}>
				<NavBar handleChange={this.changeFormat} showingAllColors={false} />
				<div className={classes.paletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>Go Back</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
