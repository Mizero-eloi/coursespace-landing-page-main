import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'
import { Typography } from '@mui/material'

const courseMenu: Array<Navigation> = [
  {
    label: 'UI/UX Design',
    path: '#',
  },
  {
    label: 'Mobile Development',
    path: '#',
  },
  {
    label: 'Machine Learning',
    path: '#',
  },
  {
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Vision" />
        <Typography>Empowering Africa's socio-economic transformation through evidence-based policies and global leadership in research</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Mission" />
        <Typography>To accompany Africa in achieving sustainable development by providing rigorous scientific studies and guiding policy decisions for positive impact.</Typography>
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
