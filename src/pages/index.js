import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { ButtonCircle, Flex, Box, Heading } from 'rebass/emotion'

const IndexPage = () => (
  <Layout>
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box>
        <Heading textAlign="center" mb={4}>
          The best design resources to energize your workflow
        </Heading>
      </Box>
      <ButtonCircle px={4} py={2} fontSize={3} bg="fuchsia">
        Take me to random
      </ButtonCircle>
    </Flex>
  </Layout>
)

export default IndexPage
