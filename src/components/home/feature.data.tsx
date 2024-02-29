import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Policy Analysis',
    description: 'RASCO conducts in-depth analysis to inform evidence-based policies tailored to specific socio-economic challenges',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Institutional Analyses',
    description: 'RASCO evaluates organizational structures and processes to enhance effectiveness and efficiency.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Strategic Planning',
    description: ' RASCO assists clients in developing strategic plans to achieve long-term objectives and navigate dynamic environments.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Impact Assessment Studies',
    description: 'RASCO evaluates the outcomes and impacts of policies and interventions to optimize effectiveness and drive positive change.',
    icon: <ContactSupportIcon />,
  },
]
