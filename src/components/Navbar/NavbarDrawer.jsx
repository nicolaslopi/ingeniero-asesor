import {
  Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import { useState } from "react";
  
  export default function NavListDrawer({ onClick, navLinks }) {
    return (
      <Box sx={{ width: 250 }} onClick={onClick}>
        <nav aria-label="main mailbox folders">
          <List>
            {navLinks.map((item) => (
              <ListItem disablePadding key={item.title} sx={{"&:hover": {backgroundColor:"#f99f00", color:"#fff"}}}>
                <ListItemButton href={item.path} component={Button} >
                  {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                  <ListItemText primary={item.title} sx={{fontWeight:"", color:"#000032"}}/>
                </ListItemButton>
                <Divider/>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    );
  }
  