import NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material'
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
				<Typography variant='h6'>
					<NextLink href='/' passHref>
						<Link underline='none' color='white'>
							<Typography variant='h6'>
								OpenJira
							</Typography>
						</Link>
					</NextLink>
				</Typography>
			</Toolbar>
    </AppBar>
  )
}