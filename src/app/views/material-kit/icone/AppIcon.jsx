

import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Span } from 'app/components/Typography'
import { Card, Checkbox, FormControlLabel, Grid, Button } from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
}))

const JustifyBox = styled(FlexBox)(() => ({
    justifyContent: 'center',
}))

const ContentBox = styled(JustifyBox)(() => ({
    height: '100%',
    padding: '32px',
    background: 'rgba(0, 0, 0, 0.01)',
}))

const IMG = styled('img')(() => ({
    width: '100%',
}))

const JWTRegister = styled(JustifyBox)(() => ({
    // background: '#1A2038',
    minHeight: '100vh !important',
    '& .card': {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const JwtRegister = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({})
    const { register } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = (event) => {
        try {
            register(state.name, state.email, state.date, state.username, state.number, )
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    let { name, email, date, username, number,   } = state

    
//     1) https://naxum-laravel.herokuapp.com/public/api/login
// Request :
// x-www-form-urlencoded
// username : testawebon2
// password : Test@123
// Response :
// {
//     "user": [
//         {
//             "id": 5,
//             "full_name": "Test Awebon2",
//             "username": "testawebon2",
//             "email": "testawebon2@gmail.com",
//             "mobile_number": "1111222222",
//             "email_verified_at": null,
//             "role_id": 2,
//             "status": 1,
//             "created_at": "2022-03-31T14:16:05.000000Z",
//             "updated_at": "2022-03-31T14:16:05.000000Z"
//         }
//     ],
//     "token": "104|21rdc0FwAiUMX95ufu45U55KTpKwySbXJ5xtvqcF"
// }

    return (
        


        <JWTRegister>
            <Card className="card">
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <ContentBox>
                            <IMG
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />

                            
                        </ContentBox>
                        
                        

                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <Box p={4} height="100%">
                            <ValidatorForm onSubmit={handleFormSubmit}>

                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="Full Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    value={name || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                

                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    // variant="outlined"
                                    size="small"
                                    label=""
                                    onChange={handleChange}
                                    // views={['day', 'month', 'year']}
                                    type="date"
                                    name='date'
                                    // placeholder='date'
                                    value={date || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="Username"
                                    onChange={handleChange}
                                    type="text"
                                    name="username"
                                    value={username || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    sx={{ mb: '16px', width: '100%' }}
                                    label="Mobail Number"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="number"
                                    type="num"
                                    value={number || ''}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={email || ''}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                             
                                <FlexBox>
                                    <Span sx={{ mr: 2, ml: '25%' }}></Span>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        Save
                                    </Button>
                                   
                                </FlexBox>
                            </ValidatorForm>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </JWTRegister>
    )
}

export default JwtRegister
