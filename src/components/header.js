import React from 'react'
import { Link } from 'gatsby'
import theme from '../../theme'
import {
  Flex,
  Box,
  Image,
  Container,
  Button,
  NavLink,
  Row,
} from 'rebass/emotion'

import Logo from '../images/sp-logo.svg'

const Header = () => (
  <Container pb={4}>
    <Flex bg="light-grey" alignItems="center" py={3}>
      <Box flex="1 0 auto">
        <Row mx={0}>
          <Image src={Logo} width="30" mr={4} />
          <NavLink mr={4}>Category</NavLink>
          <NavLink>Free</NavLink>
        </Row>
      </Box>
      <Box alignSelf="center">
        <Button borderRadius={4} bg={theme.colors.fuchsia}>
          Submit Resource
        </Button>
      </Box>
    </Flex>
  </Container>
)

export default Header
