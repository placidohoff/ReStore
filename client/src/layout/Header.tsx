import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface Props{
    toggleLightDark: () => void;
}

export default function Header({toggleLightDark}: Props){
    return(
        <AppBar position="static" sx={{mb: 4}}> 
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch 
                    onChange={toggleLightDark}
                />
            </Toolbar>
        </AppBar>
    )
}