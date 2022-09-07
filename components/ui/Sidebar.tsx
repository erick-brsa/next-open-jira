import {	
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

import { useUI } from "../../hooks"

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"]

export const Sidebar = () => {

	const { sidemenuOpen, CloseSideMenu } = useUI()

	return (
		<Drawer
			open={sidemenuOpen}
			anchor="left"
			onClose={CloseSideMenu}
		>
			<Box sx={{ width: 250 }}>

			</Box>
			<Box sx={{ padding: "5px 10px" }}>
				<Typography variant="h4">Menú</Typography>
				<List>
					{menuItems.map((text, index) => (
						<ListItem button key={index}>
							<ListItemIcon>
								{ index % 2 ?<InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
							</ListItemIcon>
							<ListItemText primary={text}>
								
							</ListItemText>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{menuItems.map((text, index) => (
						<ListItem button key={index}>
							<ListItemIcon>
								{ index % 2 ?<InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
							</ListItemIcon>
							<ListItemText primary={text}>
								
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	)
}
