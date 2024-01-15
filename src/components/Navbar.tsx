import { Box, Button, Flex, HStack, VisuallyHidden, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../images/graphics/logo.svg'
import { HamburgerMenu, SidebarMenu } from './layout/HamburgerMenu'
import { Footer } from './layout/Footer'

export const Navbar = () => {
    // const [active, setActive] = useState(false)
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box bg={'#FFFCF8'}>
            <Box as="header" position={'sticky'} bg={'#FFFCF8'} top="0" width="full" zIndex="999">
                {/* <AnnouncementBar /> */}
                <Box maxW="7xl" mx="auto" py={{ md: "8", base: "4" }} px={{ base: '6', md: '8' }}>
                    <Flex as="nav" justify="space-between">
                        <HStack spacing="8">
                            <Box as={Link} to="/" rel="home">
                                <VisuallyHidden>Korman Capital</VisuallyHidden>
                                <Image src={Logo} alt="Korman Capital" w={{ md: '36', base: '28' }} />
                            </Box>
                            <HStack display={{ base: 'none', lg: 'flex' }} spacing="8">
                            </HStack>
                        </HStack>
                        <Flex align="center">
                            <HStack spacing="8" display={{ base: 'flex', md: 'flex' }}>
                                <Button colorScheme='secondary' display={{ base: 'none', md: 'flex' }} size="md" textTransform={'uppercase'} rounded="md"
                                    as={Link} to='contact'>
                                    Invest with us
                                </Button>
                                <HamburgerMenu active={isOpen} setActive={onToggle} />
                            </HStack>
                        </Flex>
                    </Flex>
                    <SidebarMenu active={isOpen} setActive={onToggle} />
                </Box>
            </Box>
            <Outlet />
            <Footer />
        </Box>
    )
}

