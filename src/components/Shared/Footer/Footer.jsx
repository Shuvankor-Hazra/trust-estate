import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                {/* Footer top */}
                <Grid container spacing={2}>
                    {/* First col */}
                    <Grid item xs={3}>
                        <Box>First</Box>
                    </Grid>
                    {/* Second col */}
                    <Grid item xs={6}>
                        <Box>Second</Box>
                    </Grid>
                    {/* Third col */}
                    <Grid item xs={3}>
                        <Box>Third</Box>
                    </Grid>
                </Grid>
                {/* Footer bottom */}
            </Box>
        </>
    );
};

export default Footer;