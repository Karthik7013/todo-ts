import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material"
import ClassRoundedIcon from '@mui/icons-material/ClassRounded';

const Header = () => {
    return (
        <AppBar>
            <Toolbar sx={{ justifyContent: 'space-between' }} >
                <Stack direction='row' alignItems='center' gap={1}><ClassRoundedIcon /><Typography variant="h6">TODO</Typography></Stack>
                <Box component={Stack} flexDirection="row" gap={2}>
                    <Typography variant="body1" textTransform="uppercase" component="a" href="/signin">signin</Typography>
                    <Typography variant="body1" textTransform="uppercase" component="a" href="/signout">signout</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header