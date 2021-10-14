import * as React from 'react';
/*import {BrowserRouter,Link,Route,Switch} from "react-router-dom"*/
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function DenseMenu() {
  return (
    
    <MenuList dense>
        <MenuItem>
            <ListItemText inset><h1>Corenergy</h1></ListItemText>
        </MenuItem>
        <MenuItem>
            <ListItemText inset>List of products</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <ListItemText inset>Products by category</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
            <ListItemText inset>Sales</ListItemText>
        </MenuItem>
    </MenuList>
  );
}