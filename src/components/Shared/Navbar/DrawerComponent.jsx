import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';

const Pages = ["Home", "Property", "Blog", "Page", "Contact", "Login", "Logout"]

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer PaperProps={{
                sx: { width: "250px", padding: "10px" },
            }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {
                        Pages.map((page, idx) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={idx}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default DrawerComponent;
