import { Box, Heading, Image, ListItem, SimpleGrid, Stack, StackProps, Text, UnorderedList, chakra } from '@chakra-ui/react'
import React from 'react'
import Dart from '../images/graphics/dart.svg'
import Growth from '../images/graphics/growth.svg'
import Magnify from '../images/graphics/magnify.svg'
import Bulb from '../images/graphics/bulb.svg'
import Sheet from '../images/graphics/sheet.svg'
import Portfolio from '../images/graphics/portfolio.svg'
import StepSvg from '../images/graphics/step.svg'
// import StepSvg2 from '../images/graphics/Vector.svg'

export const Philosophy = () => {
    return (
        <Box as="section" pt={{ lg: "10", base: "5" }} pb="20" overflow="hidden">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
                <Stack spacing={10}>
                    <Stack spacing={8}>
                        <Heading as='em' fontSize={'3xl'} color={'secondary.500'}>Investing Philosophy</Heading>
                        <Stack spacing={14}>
                            <Stack spacing={6}>
                                <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>Anchor Tenants</Text>
                                <SimpleGrid columns={[1, 3]} spacing={12}>
                                    {data.map((item) => <AnchorTenants key={item.text} image={item.image} text={item.text} />)}
                                    {data2.map((item) => <AnchorTenants key={item.text} image={item.image} text={item.text} bg='primary.400' />)}
                                </SimpleGrid>
                            </Stack>
                            <Stack spacing={6}>
                                <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>Stock Selection Process</Text>
                                <SimpleGrid columns={[1, 2]} spacing={14}>
                                    <StockSelectionStep />
                                    {/* {data.map((item) => <AnchorTenants key={item.text} image={item.image} text={item.text} />)} */}
                                </SimpleGrid>
                            </Stack>
                            <Stack spacing={6}>
                                <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>Risk Management</Text>
                                <Box px={4} py={{ base: 4, md: 12 }} bg='secondary.500' rounded={10}>
                                    <Stack spacing={12} maxW={'5xl'} mx={'auto'}>
                                        <Text fontSize={20} fontWeight={'medium'} color={'white'}>More than returns, we are in the business of managing risk. Risk if managed properly the returns take care of themselves. We manage risk through below measures:</Text>
                                        <UnorderedList fontSize={20} fontWeight={'medium'} color={'white'}>
                                            <ListItem>Stock/sector level caps </ListItem>
                                            <ListItem>25 odd stocks in the portfolio </ListItem>
                                            <ListItem>Avoid/lower portfolio level allocation to illiquid stocks</ListItem>
                                        </UnorderedList>
                                    </Stack>
                                </Box>
                            </Stack>
                            <Stack spacing={6}>
                                <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>When do we sell?</Text>
                                <Text fontSize={16} fontWeight={'medium'} color={'gray.800'}>Capital is finite. So, it is important to allocate the same in the best possible ideas at a point in time.<br /> We sell, if</Text>
                            </Stack>
                            <Stack spacing={6}>
                                <Text fontSize={'xl'} fontWeight={600} textTransform={'uppercase'} color={'primary.500'}>Open mind</Text>
                                <Box px={4} py={{ base: 4, md: 12 }} bg='secondary.500' rounded={10}>
                                    <Stack spacing={12} maxW={'5xl'} mx={'auto'}>
                                        <Text fontSize={20} fontWeight={'medium'} color={'white'}>Over the years we have learned to have an open mind and not to ignore any sector or company given it has a reasonable business and the promoter is not an outright fraud. Example PSU’s, Capex companies, EPC companies etc. We do look at them. Whether we decide to invest or not is a separate decision based on whether it fulfils our investing parameters.</Text>
                                        <Text fontSize={20} fontWeight={'medium'} color={'white'}>The only rule in the market is there are no rules and no one knows anything beyond a point.</Text>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export const StockSelectionStep = () => {
    return (
        <Stack pos={'relative'}>
            <Stack pos={'relative'} alignItems={'start'}>
                <Image src={StepSvg} w={{ md: 300, base: 200 }} alt='step count' />
                <Heading zIndex={'9'} pos={'absolute'} left={'5%'} top={'15%'} transform={'translate(20px, 30px)'} textAlign={'center'} as={'em'} fontSize={'3xl'} color={'white'}>Step<br />01</Heading>
            </Stack>
        </Stack>
    )
}

export const AnchorTenants = ({ image, text, ...props }: AnchorTenantsProps) => {
    return (
        <Stack alignItems={'start'}>
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

export const StepSvg1 = () => {
    return (
        <chakra.svg
            // pos="absolute"
            // bottom="-7"
            insetStart="3.5rem"
            viewBox="30 0 500 381"
            color={'primary.500'}
            style={{
                filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, .1)',
            }}>
            <path d="M72.6214 290.273L144.321 290.56C167.946 290.655 187.171 270.224 187.257 244.925L187.537 163.839C187.585 150.095 192.729 136.935 201.841 127.254L213.588 114.769C221.639 106.21 226.188 94.5795 226.23 82.4312C226.328 53.8093 204.741 30.5218 178.009 30.4162L73.5223 30.0003C49.8973 29.9049 30.672 50.336 30.5861 75.6345L30.0003 244.302C29.9112 269.597 48.9932 290.181 72.6214 290.273Z" fill="#31534F" />
        </chakra.svg>
    )
}