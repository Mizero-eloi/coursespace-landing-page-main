import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
    sx={{
      width: 200,
      height: 200,
      marginX: 'auto',
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url(${item.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.email}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
