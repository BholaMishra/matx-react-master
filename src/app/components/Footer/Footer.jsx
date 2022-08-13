import React from 'react'
import { Span, Paragraph } from '../Typography'
import useSettings from 'app/hooks/useSettings'
import { Path, Toolbar, AppBar, ThemeProvider } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import { topBarHeight } from 'app/utils/constant'
import { Icon, } from '@mui/material'



const AppFooter = styled(Toolbar)(() => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: topBarHeight,
    '@media (max-width: 499px)': {
        display: 'table',
        width: '100%',
        minHeight: 'auto',
        padding: '1rem 0',
        '& .container': {
            flexDirection: 'column !important',
            '& a': {
                margin: '0 0 16px !important',
                background:'whiote'
            },
        },
    },
}))

const FooterContent = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 1rem',
    maxWidth: '1170px',
    margin: '0 auto',
}))

const Footer = () => {
    const theme = useTheme()
    const { settings } = useSettings()

    const footerTheme = settings.themes[settings.footer.theme] || theme

    return (
        <ThemeProvider theme={footerTheme}>
            <AppBar
                color="primary"
                position="static"
                sx={{ zIndex: 96 }}
            >
                <>
                    <AppFooter>
                        <FooterContent>
                        <Span sx={{ mr: 1, ml: '4%' }}></Span>
                        <a href="/dashboard/default">
                            <Icon>dashboard</Icon>                            
                            </a><br/>                            
                            <Span sx={{ mr: 1, ml: '18%' }}></Span>
                            <a href="/material/autocomplete"> <Icon>people-fill</Icon>
                            </a>
                            <Span sx={{ mr: 1, ml: '18%' }}></Span>
                            <a href="/material/buttons">
                                <Icon>person-plus-fill</Icon>
                                </a>
                                  <Span sx={{ mr: 1, ml: '18%' }}></Span>
                            <a href="/material/icons"><Icon>settings</Icon>
                            </a>
                            <Span sx={{ m: "auto" }}></Span>                         
                        </FooterContent>
                    </AppFooter>
                </>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer
