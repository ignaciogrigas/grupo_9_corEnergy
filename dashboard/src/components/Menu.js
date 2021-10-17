import * as React from 'react';
import {Link} from "react-router-dom"
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import '../css/menu.css'

export default function DenseMenu() {
  return (
    
    <MenuList dense className="menu">
        <MenuItem>
            <Link to="/" exact={true}><ListItemText inset><h1>Corenergy</h1></ListItemText></Link>
        </MenuItem>
        <MenuItem>
            <Link to="/list-of-products"><ListItemText inset><p>List of products</p></ListItemText></Link>
        </MenuItem>
        <Divider sx={{bgcolor:"white",margin:2}}/>
        <MenuItem>
            <Link to="/products-by-category"><ListItemText inset><p>Products by category</p></ListItemText></Link>
        </MenuItem>
        <Divider sx={{bgcolor:"white",margin:2}} />
        <MenuItem>
            <Link to="/sales"><ListItemText inset><p>Sales</p></ListItemText></Link>
        </MenuItem>
    </MenuList>
  );
}