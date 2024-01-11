import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'

export const Disclosure = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <BreadCrumb
                pages={[
                    { name: 'Home', url: '/' },
                    { name: 'Disclosure', url: '/disclosure', isCurrent: true },
                ]}>
            </BreadCrumb>
            <Box as="section" pb="20" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack spacing={8} >
                        <Heading as='em' fontSize={'3xl'} color={'secondary.500'}>Disclosure</Heading>
                        <Box px={4} py={{ base: 6, md: 12 }} bg='secondary.500' rounded={10}>
                            <Stack spacing={{ base: 8, md: 8 }} maxW={'5xl'} mx={'auto'}>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    <Text as='span' fontWeight={600}>Name: </Text>
                                    Korman Capital Investment Advisors LLP
                                </Text>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    <Text as='span' fontWeight={600}>Registered Office Address: </Text>
                                    Korman Capital Investment Advisors LLP, Wework Prestige Atlanta, 80 Feet Main Road, Koramangala 1A Block, Bangalore, Karnataka 560034
                                </Text>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Investment Advisor SEBI Registration Number: </Text>
                                        INA000018656
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>BASL Membership ID: </Text>
                                        BASL2107
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Type of registration: </Text>
                                        Non-Individual
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Registration validity: </Text>
                                        Dec 06, 2023 – Perpetual
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Corporate Identification number: </Text>
                                        AAW-8811
                                    </Text>
                                </Stack>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    <Text as='span' fontWeight={600}>Principle Officer Details: </Text>
                                </Text>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Name: </Text>
                                        Gaurav Somani
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Email: </Text>
                                        gaurav@kormancapital.com
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Contact: </Text>
                                        9611877783
                                    </Text>
                                </Stack>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    <Text as='span' fontWeight={600}>Compliance Office Details: </Text>
                                </Text>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Name: </Text>
                                        Jyoti Somani
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Email: </Text>
                                        support@kormancapital.com
                                    </Text>
                                </Stack>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    <Text as='span' fontWeight={600}>Grievance Office Details: </Text>
                                </Text>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Name: </Text>
                                        Jyoti Somani
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Email: </Text>
                                        support@kormancapital.com
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Investor Grievance ID: </Text>
                                        support@kormancapital.com
                                    </Text>
                                </Stack>
                                <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                    ODR Portal could be accessed, if unsatisfied with the response. Your attention is drawn to the SEBI circular no. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, on “Online Resolution of Disputes in the Indian Securities Market”. A common Online Dispute Resolution Portal (“ODR Portal”) which harnesses conciliation and online arbitration for resolution of disputes arising in the Indian Securities Market has been established. ODR Portal can be accessed via the following link - https://smartodr.in/.
                                </Text>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Corresponding SEBI Office Address: </Text>
                                        2nd Floor, Jeevan Mangal Building, No.4, Residency Road, Bengaluru – 560025, Karnataka.
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Tel. Board: </Text>
                                        +91-080-22222262/ 22222264/ 2222 2283.
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}> E-mail: </Text>
                                        bangalore-lo@sebi.gov.in
                                    </Text>
                                </Stack>
                                <Stack spacing={1}>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        <Text as='span' fontWeight={600}>Disclaimer: </Text>
                                    </Text>
                                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>
                                        Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    )
}
