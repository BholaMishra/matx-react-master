
import React from 'react'
import { Paragraph } from 'app/components/Typography'
import { Box, styled, useTheme } from '@mui/system'
import { Span } from 'app/components/Typography'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@mui/material'

const CardHeader = styled('div')(() => ({
    paddingLeft: '20px',
    paddingRight: '20px',
    marginBottom: '12px',
    marginLeft: '20px',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
    minWidth: 400,
    whiteSpace: 'pre',
    '& small': {
        height: 15,
        width: 50,
        borderRadius: 500,
        boxShadow:
            '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
    '& td': {
        borderBottom: 'none',
    },
    '& td:first-of-type': {
        paddingLeft: '25px !important',
    },
}))



const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const TopSellingTable = () => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgPrimary = palette.primary.main
    const bgSecondary = palette.secondary.main

    return (
        <>

            <Card elevation={10} sx={{ pt: '30px', mb: 2 }}>


                <div class="input-group p-3">
                    <label for="validationServer02" class="form-label">Search Contacts</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="validationServer02" />
                        <span class="input-group-text"><i class="bi bi-search"></i></span>
                    </div>
                </div>

            </Card>

            <Card elevation={3} sx={{ pt: '10px', mb: 2 }}>

                <Box overflow="auto">
                    <ProductTable>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ px: 8 }} colSpan={4} coler=''>
                                    Name
                                </TableCell>
                                <TableCell sx={{ px: 1 }} colSpan={2}>
                                    Time
                                </TableCell>
                                <TableCell sx={{ px: 0 }} colSpan={1}>
                                    {/* Action */}
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map((product, index) => (
                                <TableRow key={index} hover>
                                    <TableCell
                                        colSpan={4}
                                        align="left"
                                        sx={{ px: 0, textTransform: 'capitalize' }}
                                    >
                                        <Box display="flex" alignItems="center">
                                            <Avatar src={product.imgUrl} />
                                            <Paragraph sx={{ m: 0, ml: 4 }}>
                                                {product.name}<br />
                                                {product.number}
                                            </Paragraph>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        colSpan={2}
                                        sx={{ px: 0, textTransform: 'capitalize' }}
                                    >
                                        {

                                            product.time}
                                    </TableCell>

                                    <TableCell sx={{ px: 0 }} colSpan={1}>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </ProductTable>
                    <Span sx={{ mr: 1, ml: '30%' }}></Span>
            <div sx={{ px: 0 }} colSpan={2} class="dataTables_info" id="datatables-dashboard-projects_info" role="status" aria-live="polite">Showing 7 to 9 of 9 entries</div>

            <Span sx={{ mr: 2, ml: '100%' }}></Span>
            <div sx={{ px: 20 }} colSpan={2} className="dataTables_paginate paging_simple_numbers" id ="datatables-dashboard-projects_paginate" >
                    <Span sx={{ mr: 2, ml: '100%' }}></Span>
                    <ul className="pagination">
            <li className="paginate_button page-item previous disabled" id="datatables-dashboard-projects_previous">
                <a href="#" aria-controls="datatables-dashboard-projects" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
            </li>
            <li class="paginate_button page-item active">
                <a href="#" aria-controls="datatables-dashboard-projects" data-dt-idx="1" tabindex="0" class="page-link">1</a>
            </li>
            <li className="paginate_button page-item ">
                <a href="#" aria-controls="datatables-dashboard-projects" data-dt-idx="2" tabindex="0" class="page-link">2</a>
            </li>
            <li className="paginate_button page-item next" id="datatables-dashboard-projects_next">
                <a href="#" aria-controls="datatables-dashboard-projects" data-dt-idx="3" tabindex="0" class="page-link">Next</a>
            </li>
        </ul>
  </div >
                </Box>
            </Card>
        </>
    )
}

const productList = [
    {
        imgUrl: 'C:/Users/Bhola%20Mishra/Pictures/Bhola%20mishra%20resume11.jpg',
        name: 'Bhola Mishra',
        number: '+91 9399060475',
        time: '03:58 pm',
        available: 5,
    },
    {
        imgUrl: 'C:\Users\Bhola Mishra\Pictures\Bhola mishra resume11.jpg',
        name: 'Vijay Mishra',
        number: '+91 9399060475',
        time: '11:07 am',
        available: 15,
    },
    {
        imgUrl: 'C:\Users\Bhola Mishra\Pictures\Bhola mishra resume11.jpg',
        name: 'Yashraj Soni',
        number: '+91 9399060475',
        time: '07:33 am',
        available: 30,
    },
    {
        imgUrl: 'C:\Users\Bhola Mishra\Pictures\Bhola mishra resume11.jpg',
        name: 'Anuj Vyas ',
        number: '+91 9399060475',
        time: '08:26 pm',
        available: 35,
    },
    {
        imgUrl: 'C:\Users\Bhola Mishra\Pictures\Bhola mishra resume11.jpg',
        name: 'Amit Sahu',
        number: '+91 9399060475',
        time: '10:46 pm',
        available: 0,
    },

]

export default TopSellingTable
