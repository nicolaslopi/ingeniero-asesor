import {
  Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box
  } from "@mui/material";
  import { useContext, useState } from "react";
import { ServicesContext } from "../MainPage/ServicesContext";
  
  export default function NavListDrawer({ onClick, navLinks }) {

    const {services, setServices} = useContext(ServicesContext);

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
  