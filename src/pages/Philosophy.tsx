import { Box, HStack, Heading, Image, ListItem, SimpleGrid, Stack, StackProps, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Dart from '../images/graphics/dart.svg'
import Growth from '../images/graphics/growth.svg'
import Magnify from '../images/graphics/magnify.svg'
import Bulb from '../images/graphics/bulb.svg'
import Sheet from '../images/graphics/sheet.svg'
import Portfolio from '../images/graphics/portfolio.svg'
import StepSvg from '../images/graphics/step.svg'
import Earnings from '../images/graphics/earnings.svg'
import Idea from '../images/graphics/idea.svg'
import Investment from '../images/graphics/investment.svg'
import Graph from '../images/graphics/graph.svg'
import { motion } from 'framer-motion'
import { BreadCrumb } from '../components/layout/BreadCrumb'

export const Philosophy = () => {
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
                    { name: 'Investing Philosophy', url: '/investing-philosophy', isCurrent: true },
                ]}>
            </BreadCrumb>
            <Box as="section" pb="20" overflow="hidden">
                <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                    <Stack spacing={12}>
                        <Stack spacing={8}>
                            <Heading fontSize={'3xl'} color={'secondary.500'} fontFamily={'RecifeDisplay-Italic'} fontWeight={'semibold'}>Investing Philosophy</Heading>
                            <Stack spacing={{ base: 16, md: 28 }}>
                                <Stack spacing={8}>
                                    <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.400'}>Anchor Tenants</Text>
                                    <SimpleGrid columns={[1, 3]} spacing={12}>
                                        {data.map((item) => <AnchorTenants key={item.text} image={item.image} text={item.text} />)}
                                        {data2.map((item) => <AnchorTenants key={item.text} image={item.image} text={item.text} bg='primary.400' />)}
                                    </SimpleGrid>
                                </Stack>
                                <Stack spacing={10}>
                                    <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>Stock Selection Process</Text>
                                    <SimpleGrid columns={[1, 2]} spacing={{ md: 20, base: 20 }}>
                                        {stepData.map((item) => <StockSelectionStep key={item.step} step={item.step} text={item.text} />)}
                                    </SimpleGrid>
                                </Stack>
                                <Stack spacing={8} mt={6}>
                                    <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.400'}>Risk Management</Text>
                                    <Box px={4} py={{ base: 4, md: 12 }} bg='secondary.500' rounded={10}>
                                        <Stack spacing={6} maxW={'5xl'} mx={'auto'}>
                                            <Text fontSize={{ md: 18, base: 16 }} fontWeight={'medium'} color={'white'}>More than returns, we are in the business of managing risk. Risk if managed properly the returns take care of themselves. We manage risk through below measures:</Text>
                                            <UnorderedList fontSize={{ md: 18, base: 16 }} fontWeight={'medium'} color={'white'}>
                                                <ListItem>Stock/sector level caps </ListItem>
                                                <ListItem>25 odd stocks in the portfolio </ListItem>
                                                <ListItem>Avoid/lower portfolio level allocation to illiquid stocks</ListItem>
                                            </UnorderedList>
                                        </Stack>
                                    </Box>
                                </Stack>
                                <Stack spacing={8}>
                                    <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.400'}>When do we sell?</Text>
                                    <Text fontSize={16} fontWeight={'medium'} color={'gray.800'}>Capital is finite. So, it is important to allocate the same in the best possible ideas at a point in time.<br /> We sell, if</Text>
                                    <Stack alignItems={'start'} spacing={8}>
                                        {data3.map((item) => <HStack pr={{ base: 4, md: 10 }} rounded={10} bg={'secondary.500'} key={item.text} alignItems={'center'} spacing={4}>
                                            <Stack justifyContent={'center'} alignItems={'center'} bg={'primary.400'} rounded={10} boxSize={20}>
                                                <Image boxSize={12} src={item.image} alt={item.text} />
                                            </Stack>
                                            <Text flex={1} fontSize={{ md: 18, base: 16 }} fontWeight={'medium'} color={'white'}>{item.text}</Text>
                                        </HStack>)}
                                    </Stack>
                                </Stack>
                                <Stack spacing={8}>
                                    <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.400'}>Open mind</Text>
                                    <Box px={4} py={{ base: 4, md: 12 }} bg='secondary.500' rounded={10}>
                                        <Stack spacing={6} maxW={'5xl'} mx={'auto'}>
                                            <Text fontSize={{ md: 18, base: 16 }} fontWeight={'medium'} color={'white'}>Over the years we have learned to have an open mind and not to ignore any sector or company given it has a reasonable business and the promoter is not an outright fraud. Example PSU’s, Capex companies, EPC companies etc. We do look at them. Whether we decide to invest or not is a separate decision based on whether it fulfils our investing parameters.</Text>
                                            <Text fontSize={{ md: 18, base: 16 }} fontWeight={'medium'} color={'white'}>The only rule in the market is there are no rules and no one knows anything beyond a point.</Text>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </motion.div>
    )
}

export const StockSelectionStep = ({ step, text }: StockSteps) => {
    return (
        <Stack pos={'relative'}>
            <Stack pos={'relative'} left={10} top={10} alignItems={'start'}>
                <Stack pos={'absolute'} transform={'translate(-25%,-10%)'} zIndex={2} alignItems={'start'}>
                    <Image src={StepSvg} w={{ md: 300, base: 200 }} alt='step count' />
                    <Heading zIndex={'9'} pos={'absolute'} left={{ base: '0%', md: '5%' }} top={{ base: '7%', md: '15%' }} transform={'translate(20px, 30px)'} textAlign={'center'} as={'em'} fontSize={'3xl'} color={'white'}>Step<br />{step}</Heading>
                </Stack>
                <Box w={'calc(100% - 100px)'} minH={100} roundedRight={20} borderWidth={4} borderColor={'primary.500'}></Box>
                <Stack px={{ base: 12, md: 24 }} py={{ base: 8, md: 12 }} justifyContent={'center'} alignItems={'center'} marginTop={-16} w={'calc(100% - 50px)'} minH={280} roundedRight={20} bg={'secondary.500'}>
                    <Text fontSize={{ md: 18, base: 16 }} fontWeight={500} color={'white'}>{text}</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

export const AnchorTenants = ({ image, text, ...props }: AnchorTenantsProps) => {
    return (
        <Stack alignItems={{ md: 'center', base: 'center' }}>
            <Stack w={'auto'} alignItems={'center'} spacing={5} >
                <Stack justifyContent={'center'} alignItems={'center'} bg={'secondary.500'} rounded={20} boxSize={260} {...props}>
                    <Image src={image} alt={text} />
                </Stack>
                <Text fontSize={16} maxW={280} fontWeight={500} textAlign={'center'} color={'gray.800'}>{text}</Text>
            </Stack>
        </Stack>

    )
}
interface AnchorTenantsProps extends StackProps {
    image: string;
    text: string;
}
const data: AnchorTenantsProps[] = [
    {
        image: Dart,
        text: 'Focus on the process. Returns will take care of themselves'
    },
    {
        image: Growth,
        text: 'Invest in simple growth businesses available at reasonable valuations'
    },
    {
        image: Magnify,
        text: 'Identifying and being invested in right sectors'
    },
]

const data2: AnchorTenantsProps[] = [
    {
        image: Portfolio,
        text: 'Avoid companies with questionable corporate governance'
    },
    {
        image: Sheet,
        text: 'Avoid companies with bad balance sheets'
    },
    {
        image: Bulb,
        text: 'Be nimble and open to churn as per opportunities'
    },
]

interface StockSteps {
    step: string;
    text: string;

}
const stepData: StockSteps[] = [
    {
        step: '01',
        text: 'Our initial idea generation process is to look at stocks/sectors moving up on volumes.'
    }, {
        step: '02',
        text: 'We do not believe in buying stories. Earnings growth is key, any stock moving without earnings growth is unlikely to sustain its up move.'
    },
    {
        step: '03',
        text: 'Stocks screened from steps (1) and (2) are then studied diligently for fundamental parameters.'
    },
    {
        step: '04',
        text: 'We then try to value the company on forward earnings. We do not like to buy extremely overvalued companies even if they are in momentum. This positions us to get return of earnings growth & if there happens to be a rerating, that adds to our returns.'
    }
]

const data3: AnchorTenantsProps[] = [
    {
        image: Idea,
        text: 'We find better idea'
    },
    {
        image: Graph,
        text: 'Stock overvaluation stares us on our face'
    },
    {
        image: Investment,
        text: 'Our initial investment thesis was wrong or we find a flaw in the same'
    },
    {
        image: Earnings,
        text: 'Slowing earnings momentum. Avoid de-rating'
    }
]