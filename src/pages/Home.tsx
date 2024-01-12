import { Box, Heading, Image, SimpleGrid, Stack, Text, } from '@chakra-ui/react'
import React from 'react'
import HeroImage from '../images/hero3.png'
import { motion } from 'framer-motion'

export const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Box as="section" pt={{ lg: "10", base: "5" }} pb="12" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Stack spacing={0} alignItems={'center'}>
                            <Heading as="h2" size="2xl" mt="8" fontWeight={400} color={'primary.500'}>Invest in the
                                <Text as='span' color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}> India opportunity</Text>
                            </Heading>
                            <Image mt={-10} w={'full'} src={HeroImage} alt="hero image" />
                        </Stack>
                        <Stack px={{ base: 0, md: 10 }} spacing={4}>
                            <Heading mb={4} fontSize={'4xl'} color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}>Korman Capital is a Sebi registered investment advisory firm.</Heading>
                            <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} lineHeight={'md'}>Korman Capital, founded by an experienced investor with a background in Flipkart, ICICI Bank, and Barclays, specializes in Indian capital markets. With over a decade of investment expertise, our founder transitioned from a corporate career to pursue a passion for equities. For the past 6 years, Korman Capital has thrived under his guidance, delivering consistent above-average returns, navigating market fluctuations, and harnessing the power of compounding for sustainable growth.</Text>
                        </Stack>
                        <Stack px={{ base: 0, md: 10 }} spacing={4}>
                            <Heading mb={4} fontSize={'4xl'} color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}>Clientele</Heading>
                            <SimpleGrid columns={[1, 4]} spacing={4}>
                                {data.map((item: ClientsProps) => <Stack spacing={0} rounded={20} overflow={'hidden'}>
                                    <Stack spacing={4} px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }} bg={'primary.500'} >
                                        <Heading fontSize={'3xl'} color={'white'} textAlign={'center'} fontFamily={'RecifeDisplay'} fontWeight={'regular'}>{item.name}</Heading>
                                    </Stack>
                                    <Stack spacing={4} px={{ base: 4, md: 8 }} py={{ base: 4, md: 8 }} bg={'secondary.500'} >
                                        {item.clients.map((client) => <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>{client}</Text>)}
                                    </Stack>
                                </Stack>)}

                            </SimpleGrid>
                        </Stack>
                    </Stack>

                </Box>
            </Box>
        </motion.div>

    )
}

interface ClientsProps {
    name: string,
    clients: string[]
}

const data: ClientsProps[] = [
    {
        name: 'Bengaluru',
        clients: ['Google executives', 'Linkedin executive', 'Ex- Spark capital executive']
    },
    {
        name: 'Vizag',
        clients: ['Google executives', 'Linkedin executive', 'Ex- Spark capital executive']
    },
    {
        name: 'Delhi',
        clients: ['Google executives', 'Linkedin executive', 'Ex- Spark capital executive']
    },
    {
        name: 'Mumbai',
        clients: ['Google executives', 'Linkedin executive', 'Ex- Spark capital executive']
    }
]