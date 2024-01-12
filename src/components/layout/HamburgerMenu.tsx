import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, HStack, Heading, Slide, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'
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

export const SidebarMenu = ({ active, setActive }: { active: boolean, setActive: (active: boolean) => void }) => {
    const accordionRef = useRef<HTMLButtonElement>(null)
    const handleClick = () => {
        setActive(!active)
        accordionRef.current?.click()
    }
    return (
        <Slide direction='right' in={active} style={{ zIndex: 10 }}>
            <HStack alignItems={'center'} justifyContent={'flex-end'}  >
                <Box height={'100vh'} p={8} bg={'secondary.500'} w={'xl'}>
                    <Stack spacing={16} justifyContent={'center'} h={'full'}>
                        <Stack px={{ base: 2, md: 12 }} alignItems={{ base: 'start', md: 'start' }} spacing={8}>
                            <Link to={'about'}><Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500} onClick={() => setActive(!active)}>About Us</Heading></Link>
                            <Link to={'philosophy'}><Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500} onClick={() => setActive(!active)}>Philosophy</Heading></Link>
                            <Accordion borderWidth='0' allowToggle>
                                <AccordionItem borderWidth='0' borderColor={'transparent'}>
                                    <AccordionButton ref={accordionRef} p={0} _hover={{}}>
                                        <Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500}>Insights</Heading>
                                        <AccordionIcon ml={4} fontSize={20} color={'white'} />
                                    </AccordionButton>
                                    <AccordionPanel pb={0} px={4}>
                                        <Stack spacing={4} mt={2}>
                                            <Link to={'quarterly-newsletter'}><Heading as={'h2'} fontSize={'2xl'} color={'white'} fontWeight={500} onClick={handleClick}>Quarterly Newsletter</Heading></Link>
                                            <Link to={'blogs'}><Heading as={'h2'} fontSize={'2xl'} color={'white'} fontWeight={500} onClick={handleClick}>Blogs</Heading></Link>
                                        </Stack>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <Link to={'contact'}><Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500} onClick={() => setActive(!active)}>Contact Us</Heading></Link>
                            <Link to={'disclosure'}><Heading as={'h2'} fontSize={'3xl'} color={'white'} fontWeight={500} onClick={() => setActive(!active)}>Disclosure</Heading></Link>
                        </Stack>
                        <Stack px={{ base: 2, md: 12 }} alignItems={{ base: 'start', md: 'start' }}>
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