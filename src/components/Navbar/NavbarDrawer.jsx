import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { Link } from "react-router-dom";
  
  export default function NavListDrawer({ onClick, navLinks }) {
    return (
      <Box sx={{ width: 250 }} onClick={onClick}>
        <nav aria-label="main mailbox folders">
          <List>
            {navLinks.map((item) => (
              <ListItem disablePadding key={item.title}>
                <ListItemButton href={item.path} component="a" sx={{"&:hover": {backgroundColor:"#000032", color:"white"}}}>
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.title} sx={{fontWeight:"", color:"#000032"}}/>
                </ListItemButton>
              </ListItem> 
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    );
  }
  