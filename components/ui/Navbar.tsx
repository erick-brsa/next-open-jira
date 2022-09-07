import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUI } from '../../hooks';

export const Navbar = () => {

	const { OpenSideMenu } = useUI() 
	
  return (
    <AppBar position='sticky'>
			<Toolbar>
				<IconButton
					size='large'
					edge='start'
					onClick={OpenSideMenu}
				>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
    </AppBar>
  )
}