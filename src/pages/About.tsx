import { Box, HStack, Heading, Image, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Gaurav from '../images/gaurav.png'
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

export const About = () => {
    return (
        <Box as="section" pt={{ lg: "10", base: "5" }} pb="20" overflow="hidden">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Stack spacing={12}>
                    <HStack spacing={12}>
                        <Image src={Gaurav} alt='Gaurav Somani' />
                        <Stack spacing={8}>
                            <Heading as='em' fontSize={'3xl'} color={'primary.500'}>Gaurav Somani</Heading>
                            <Text fontFamily={'RecifeDisplay'} color={'secondary.500'} fontWeight={600}>MBA, FMS Delhi; BTech, IIIT Hyderabad; CFA L2; FRM<br />
                                Past Experience: Flipkart, ICICI Bank, Barclays Bank</Text>
                            <HStack spacing={4}>
                                <Stack as={ChakraLink} boxSize={12} justifyContent={'center'} alignItems={'center'} rounded={5} bg={'secondary.500'}><FaLinkedinIn color='white' size={32} /></Stack>
                                <Stack as={ChakraLink} boxSize={12} justifyContent={'center'} alignItems={'center'} rounded={5} bg={'secondary.500'}><BsTwitterX color='white' size={24} /></Stack>
                                <Stack as={ChakraLink} boxSize={12} justifyContent={'center'} alignItems={'center'} rounded={5} bg={'secondary.500'}><MdMailOutline color='white' size={32} /></Stack>
                            </HStack>
                        </Stack>
                    </HStack>
                    <Box px={4} py={{ base: 4, md: 12 }} bg='secondary.500' rounded={10}>
                        <Stack spacing={12} maxW={'5xl'} mx={'auto'}>
                            <Text fontSize={20} fontWeight={'medium'} color={'white'}>With over 12 years of unwavering commitment to the Indian Capital markets, Korman Capital's founder, Gaurav, brings a wealth of experience and expertise. Holding an MBA from FMS Delhi and a computer science degree from IIIT Hyderabad, he has also cleared FRM and CFA L2 exams, showcasing his dedication to financial proficiency.</Text>
                            <Text fontSize={20} fontWeight={'medium'} color={'white'}>Gaurav's journey from a hobby investor to a seasoned professional began in 2011. Amidst a full-time job at notable organizations like Flipkart, ICICI Bank, and Barclays, he channeled his passion for equities. Evenings and weekends were dedicated to thorough equity research, paving the way for a pivotal decision in October '17 – leaving a lucrative role at Flipkart to become a full-time investor.</Text>
                            <Text fontSize={20} fontWeight={'medium'} color={'white'}>For the past 6 years, Korman Capital has flourished under Gaurav's full-time commitment, with every investment decision reflecting his deep understanding of the Indian capital markets. Navigating through both bull and bear cycles, he consistently delivered above-average returns, witnessing the transformative power of compounding. Over the last 12 years, the modest capital he initiated with has grown into a substantial sum, a testament to Korman Capital's dedication to sustainable wealth creation.</Text>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
