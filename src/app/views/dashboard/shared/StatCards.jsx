import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '5px',
    fontWeight: '500',
    fontSize: '14px',
    // color: theme.palette.primary.main,
}))

const StatCards = () => {
    return (
        <>
        <Grid container spacing={1} sx={{ mb: '15px' }}>
        <div><h5>Overview</h5></div>
        </Grid>
        <Grid container spacing={3} sx={{ mb: '10px' }}>
            
            <Grid item xs={12} md={6}>
            
                <StyledCard elevation={6}>
                    
                    <ContentBox>
                       
                        <Box ml="12px">
                            <Small>Total Number Of Contacts</Small>
                            <Heading>500</Heading>
                        </Box>
                    </ContentBox>
            
                </StyledCard>
            </Grid>
            
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                       
                        <Box ml="12px">
                            <Small sx={{ lineHeight: 1 }}>
                                Contacts Added This Week
                            </Small>
                            <Heading>20</Heading>
                        </Box>
                    </ContentBox>  
                </StyledCard>
            </Grid>
        </Grid>
        </>
    )
}

export default StatCards
