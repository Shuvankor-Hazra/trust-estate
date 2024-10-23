import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const Pages = ["Home", "Property", "Blog", "Page", "Contact", "Login", "Logout"];
const Routes = ["/", "/property", "/blog", "/page", "/contact", "/login", "/logout"];

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                PaperProps={{ sx: { width: "200px", padding: "5px" } }}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        Pages.map((page, idx) => (
                            <Link href={Routes[idx]} key={idx} passHref>
                                <ListItemButton onClick={() => setOpenDrawer(false)}>
                                    <ListItemIcon>
                                        <ListItemText>{page}</ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            </Link>
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
