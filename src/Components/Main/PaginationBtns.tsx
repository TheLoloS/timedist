import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { cyan } from "@mui/material/colors"

type Props = {}

const PaginationBtns = (props: Props) => {
  return (
    <Pagination count={10} shape="rounded" className='mt-8 drop-shadow' size="large" sx={{ backgroundColor: cyan[50] }} />
  )
}

export default PaginationBtns