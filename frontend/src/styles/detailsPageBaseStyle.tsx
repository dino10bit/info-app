import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

export const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  resourceList: {
    margin: '16px',
    padding: '8px',
    [breakpoints.up('sm')]: {
      maxWidth: '400px',
      margin: '16px auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: '850px',
    },
  },
  item: {
    margin: '16px 0',
  },
  itemText: {
    fontSize: '1rem',
    fontWeight: '700',
  },
  detailText: {
    fontSize: '1rem',
    marginLeft: '8px',
  },
  openingText: {
    fontSize: '1rem',
    lineHeight: '1.75rem',
  },
}))
