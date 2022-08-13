import React from 'react'
import { MatxLogo } from 'app/components'
import { Span } from '../../components/Typography'
import { styled, Box } from '@mui/system'
import useSettings from 'app/hooks/useSettings'

const BrandRoot = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px 5px 40px',
}))

const JustifyBox = styled(Box)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
    height: '50%',
    padding: '32px',
    position: 'relative',
    // background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '50%',
}))


const StyledSpan = styled(Span)(({ theme, mode }) => ({
    fontSize: 18,
    marginLeft: '22%',
    display: mode === 'compact' ? 'none' : 'block',
}))

const Brand = ({ children }) => {
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <>
            <BrandRoot>
                <Box display="flex" alignItems="center">
                    <JustifyBox p={0} height="4%">
                        <IMG src="img/avatars/avatar.jpg" Name="img-fluid rounded-circle mb-2" alt="Linda Miller" /><br />
                    </JustifyBox><br /><br />
                </Box>
                <Box
                    className="sidenavHoverShow"
                    sx={{ display: mode === 'compact' ? 'none' : 'block' }}>
                    {children || null}
                </Box>
            </BrandRoot>
            <StyledSpan mode={mode} className="sidenavHoverShow">
                Bhola Mishra
            </StyledSpan>
        </>
    )
}

export default Brand
