import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout/'

const _404 = () => (
  <Layout>
    <Box
      alignItems='center'
      display='flex'
      height='100vh'
      justifyContent='center'
    >
      <Typography style={{ textAlign: `center`, fontSize: `2rem` }}>
        Sidan du försöker nå hittades inte.
      </Typography>
    </Box>
  </Layout>
)

export default _404
