import { Box, Button, HStack, Heading, Slide, Stack } from '@chakra-ui/react'
import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const HamburgerMenu = ({ active, setActive }: { active: boolean, setActive: (active: boolean) => void }) => {
    return (
        <>
            <Box zIndex={20} onClick={() => setActive(!active)} className={`burger-menu ${active && 'close'}`}>
                <Box as='span'></Box>
            </Box>
        </>
    )
}

export const SidebarMenu = ({ active }: { active: boolean }) => {
    return (
        <Slide direction='right' in={active} style={{ zIndex: 10 }}>
            <HStack alignItems={'center'} justifyContent={'flex-end'}  >
                <Box height={'100vh'} p={8} bg={'secondary.500'} w={'xl'}>
                    <Stack spacing={16} justifyContent={'center'} h={'full'}>
                        <Stack px={{ base: 2, md: 12 }} alignItems={{ base: 'center', md: 'start' }} spacing={8}>
                            <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>About Us</Heading>
                            <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>Philosophy</Heading>
                            <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>Insights</Heading>
                            <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>Contact Us</Heading>
                            <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>Disclosure</Heading>
                        </Stack>
                        <Stack px={{ base: 2, md: 12 }} alignItems={{ base: 'center', md: 'start' }}>
                            <Button colorScheme='primary' size="lg" textTransform={'uppercase'} rounded="md"
                                as={Link}>
                                Invest with us
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </HStack>
        </Slide>

    )
}