import clsx from 'clsx'
import React from 'react'
import { styled, useTheme } from '@mui/system'
import useSettings from 'app/hooks/useSettings'
import { Fab, IconButton, Icon } from '@mui/material'

const Toggle = styled('div')(() => ({
    position: 'fixed',
    right: '30px',
    bottom: '50px',
    zIndex: 99,
    transition: 'all 0.15s ease',
    '&.open': {
        right: '10px',
    },
}))

const SecondarySidebarToggle = () => {
    const { settings, updateSettings } = useSettings()

    const toggle = () => {
        updateSettings({
            secondarySidebar: { open: !settings.secondarySidebar.open },
        })
    }

    // useEffect(() => {
    //   updateSettings({
    //     secondarySidebar: { open: !isMobile },
    //   });
    // }, [isMobile]);

    const { palette } = useTheme()
    const textColor = palette.primary.contrastText

    return (
        <Toggle className={clsx({ open: settings.secondarySidebar.open })}>
            {settings.secondarySidebar.open && (
                <IconButton onClick={toggle} size="small" aria-label="toggle">
                    <Icon sx={{ color: textColor }}>close</Icon>
                </IconButton>
            )}
            {/* {!settings.secondarySidebar.open && (
                <Fab color="primary" aria-label="expand" onClick={toggle}>
                    <Icon sx={{ color: textColor }}>settings</Icon>
                </Fab>
            )} */}
        </Toggle>
    )
}

export default SecondarySidebarToggle
