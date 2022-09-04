import { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Switch, List, ListItem, IconButton, Badge, Box } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';

interface Props {
    toggleLightDark: () => void;
}

const navStyles = {
    cursor: 'pointer',
    typography: 'h6',
    color: 'iherit',
    '&:hover': {
        color: 'purple'
    },
    '&.active': {
        color: 'purple'
    }
}

export default function Header({ toggleLightDark }: Props) {
    const history = useHistory()
    const [midLinks, setMidLinks] = useState([
        { id: 0, title: 'catalog', path: '/catalog', active: false },
        { id: 1, title: 'about', path: '/about', active: false },
        { id: 2, title: 'contact', path: '/contact', active: false },
    ])
    const [rightLinks, setRightLinks] = useState([
        { title: 'login', path: '/login' },
        { title: 'register', path: '/register' },
    ])
    const setAsActive = (index: number) => {

        const newState = midLinks.map(obj => {
            if (obj.id === index) {
                return { ...obj, active: true }
            } else {
                return { ...obj, active: false }
            }
        })

        setMidLinks(newState)
    }
    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar>
                <Typography variant='h6' component={NavLink} to='/' sx={{ color: 'inherit', textDecoration: 'none' }}>
                    RE-STORE
                </Typography>
                <Switch
                    onChange={toggleLightDark}
                />
                <Box style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path, active }, index) => (
                            <ListItem
                                // component={NavLink} <<-IF THIS WORKED, WOULD SAVED ALOT OF TROUBLE WITH ACTIVE CLASS TOGGLE I MANUALLY FIXED
                                className={active ? 'active' : 'none'}
                                sx={navStyles}
                                onClick={() => { history.push(path); setAsActive(index); }}
                                key={index}



                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                    <Box display='flex'>
                        <IconButton size='large' sx={{ color: 'inherit' }}>
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        <List sx={{ display: 'flex' }}>
                            {rightLinks.map(({ title, path }) => (
                                <ListItem
                                    // component={NavLink}
                                    sx={navStyles}
                                    onClick={() => history.push(path)}
                                    key={path}



                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}