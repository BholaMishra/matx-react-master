import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Span } from 'app/components/Typography'
import { Card, Checkbox, FormControlLabel, Grid, Button, Icon } from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import myImage from "../../../../Bhola.jpg"
import imageCompression from 'browser-image-compression';
import {

    icon
} from '@mui/material'

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


    const config = {
        method: 'post',
        url: 'https://naxum-laravel.herokuapp.com/public/api/register',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpeWF5LmJjYTIwMjBAc3Npc20ub3JnIiwicm9sZSI6IlNVUEVSQURNSU4iLCJ0aWQiOiJrbGFkc2Zyb3dpdWlqNDU3NHdlOThyNzg5c2Q3ZiIsImV4cCI6MTYzOTk5NTYzOCwiaWF0IjoxNjM5OTkyMDM4fQ.Wqn38pALh_XZWyIG0kKhLkky40a4ChboRxAOf1KfjWo',
            'Content-Type': 'application/json'
        },
        // data: data
    };

    const handleFormSubmit = (event) => {
        try {
            register(state.name, state.email, state.date, state.username, state.number,)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    let { name, email, date, username, number, } = state

    const [image1 , SetImage1] = useState(" ")
    const imageToBase64 = async (file) => {
        if(file) {
            const options = {
                maxSizeMB: 0.01,
                maxWidthOrHeight: 1920,
                // useWebWorker: true
            }
            try {
                const compressedFile = await imageCompression(file,options);
                // console.log(compressedFile)
                console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
                var reader = new FileReader();
                reader.readAsDataURL(compressedFile)
                reader.onload = async () => {
                    var Base64 = reader.result
                    // console.log(Base64)
                    // formik.setFieldValue("photo1",Base64)
                    SetImage1(Base64)
                    console.log(Base64);
                    // setIs_data(true);
                }
                reader.onerror = (err) => {
                    console.log(err);
                }
            } catch(error) {
                console.log(error);
            }
    
        }
    }


    return (



        <JWTRegister>
            <Card className="card">
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <ContentBox>
                            <div class="mb-3 rounded-circle mb-0">
                                {/* <label for="formFileMultiple" class="form-label">Multiple files input example</label> */}
                                {image1 ===" " ?<img  src={myImage} style={{height:"50px",width:"50px"}} alt="image" />:<img  src={image1} style={{height:"50px",width:"50px"}} alt="image" />}                     <input onChange={(e)=>{imageToBase64(e.target.files[0])}} style={{display:"none"}} class="form-control" type="file" id="formFileMultiple" multiple />
                                <Button className="rounded-circle mb-0" name="photo" accept=".jpeg , .jpg , .photo , .all"
                                type="file" id="formFile">
                                <Icon onClick={() => { document.getElementById("formFileMultiple").click()}} sx={{ px: 0 }} colSpan={1}>edit</Icon>
                            </Button>
                            </div>
                            {/* <img src="C:/Users/Bhola%20Mishra/Pictures/Bhola%20mishra%20resume11.jpg" className="img-fluid rounded-circle mb-6" alt="Linda Miller" /> */}
                            
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
                                    size="small"
                                    label=""
                                    onChange={handleChange}
                                    type="date"
                                    name='date'
                                    value={date || ''}
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
                                        Add
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
