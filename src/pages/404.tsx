import React from 'react'

import Layout from '../components/layout/'

const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          height: `100vh`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <p style={{ textAlign: `center`, fontSize: `2rem` }}>
          The page you are looking for could not be found.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
