import {
    Box, Heading, Image, Link as ChakraLink, Stack, Text, TextProps, useColorModeValue, Button, ButtonProps, HStack, chakra, HTMLChakraProps, Input, TableContainer, Table, Thead, Tr, Th, Tbody, Td, IconButton, Collapse, useDisclosure,
} from '@chakra-ui/react'
import React, { useMemo } from 'react'
import Logo from '../../images/graphics/brown-logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { IoCallOutline, IoDocumentTextOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import InvestorCharter from '../../assets/investor-charter.pdf'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TriangleDownIcon } from '@chakra-ui/icons';

export const Footer = () => {
    const { pathname } = useLocation();
    console.log(pathname!)
    return (
        <Box>
            {pathname !== '/' ? '' : <Box maxW="7xl" mx="auto" px={{ base: '4', md: '8' }}>
                <ComplaintDataComp />
            </Box>}

            <Box as="footer" role="contentinfo" overflow="hidden" mx="auto" bg="primary.500">
                <Box maxW="7xl" mx="auto" px={{ base: '4', md: '8' }} py="12">
                    <Stack spacing="10">
                        <Stack w='full' justifyContent='space-between' direction={{ base: 'column', lg: 'row' }} spacing={{ base: '10', lg: '28' }}>
                            <Stack>
                                <Box flex="1">
                                    <Box maxW={{ base: "80px", md: "150px" }}>
                                        <Image src={Logo} alt="Korman capital" />
                                    </Box>
                                </Box>
                            </Stack>
                            <QuickLinks />
                            <Stack spacing={{ base: '10', md: '10' }}>
                                <ContactLinks />
                                <SubscribeForm width={{ base: 'full', md: 'sm' }} />
                            </Stack>
                        </Stack>
                        <Stack
                            direction={{ base: 'column-reverse', md: 'row' }}
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Copyright />
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export const ComplaintDataComp = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Stack maxW={'6xl'} mx='auto' spacing={0} mt={10} alignItems={'center'}>
            <HStack px={{ base: 4, md: 8 }} w={'full'} justifyContent={'flex-end'}>
                <IconButton
                    as="a"
                    marginBottom={-2}
                    rel="noopener noreferrer"
                    bg={'primary.400'}
                    cursor={'pointer'}
                    onClick={onToggle}
                    _hover={{}}
                    color={'white'}
                    aria-label="Download app"
                    size="lg"
                    icon={<TriangleDownIcon />}
                />
            </HStack>
            <Stack w='full' spacing={2} bg={'primary.400'} px={{ base: 4, md: 8 }} py={4} roundedTop={'md'} roundedBottom={0}>
                <HStack w={'full'} spacing={2} justifyContent={'space-between'}>
                    <Text fontSize={{ base: 12, md: 14 }} color={'white'} textTransform={'uppercase'}>
                        Number of complaints: SmartOdr.in
                    </Text>
                    <Text fontSize={{ base: 12, md: 14 }} color={'white'} textTransform={'uppercase'}>
                        Click here for detailed complaints data
                    </Text>
                </HStack>
            </Stack>
            <Collapse style={{ width: '100%' }} in={isOpen} transition={{ exit: { duration: 0.5 }, enter: { duration: 0.5 } }}>
                <Stack w='full' spacing={2} bg={'primary.400'} px={{ base: 2, md: 4 }} py={4}>
                    <ComplaintsDataTable />
                </Stack>
            </Collapse>

        </Stack>
    )
}

export interface Options {
    begining: number,
    received: number,
    resolved: number,
    pending: number,
    reasons: string
}
const data: Options[] = [
    {
        begining: 0,
        received: 0,
        resolved: 0,
        pending: 0,
        reasons: ''
    }
]
export const ComplaintsDataTable = () => {
    const columns = useMemo<ColumnDef<Options>[]>(() => [
        {
            accessorKey: 'begining',
            header: 'At the beginning of the month',
            cell: (doc) => doc.getValue() ?? '-'
        },
        {
            accessorKey: 'received',
            header: 'Received during the month',
            cell: (doc) => doc.getValue() ?? '-'
        },
        {
            accessorKey: 'resolved',
            header: 'Resolved during the month',
            cell: (doc) => doc.getValue() ?? '-'
        },
        {
            accessorKey: 'pending',
            header: 'Pending at the end of the month',
            cell: (doc) => doc.getValue() ?? '-'
        },
        {
            accessorKey: 'reasons',
            header: 'Reasons for pendency',
            cell: (doc) => doc.getValue() ?? '-'
        },
    ], [])
    const { getHeaderGroups, getRowModel } = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Stack rounded={'md'} borderWidth={1} borderColor={'white'} overflow={'hidden'}>
            <TableContainer>
                <Table size="sm">
                    <Thead>
                        {getHeaderGroups().map((headerGrp) => (
                            <Tr bgColor='gray.100' key={headerGrp.id}>
                                {headerGrp.headers.map((header) => (
                                    <Th borderRightWidth={1} borderColor={'white'} fontSize={12} fontWeight={400} textTransform={'capitalize'} fontFamily={'Inter'} bg={'primary.400'} color={'white'} textAlign={'center'} py={2.5} key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {getRowModel().rows.map((row) => (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td borderBottomWidth={0} borderRightWidth={1} borderColor={cell.column.id === 'reasons' ? 'white' : 'primary.500'} bg='white' textAlign={'center'} py={2.5} key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>

        </Stack>

    )
}

export const Copyright = (props: TextProps) => (
    <Text fontSize="sm" color={'gray.50'} {...props}>
        &copy; {new Date().getFullYear()} Korman Capital. All rights reserved.
    </Text>
)

export const QuickLinks = () => {
    return (
        <Stack spacing={{ base: '4', md: '8' }}>
            <Heading as="h3" color={useColorModeValue('gray.50', 'white')} fontSize="2xl" fontWeight="medium" letterSpacing="wider">
                Quick Links
            </Heading>
            <Stack spacing={4}>
                <Link to={'/about'}> <LinkItem>About Us</LinkItem></Link>
                <Link to={'/philosophy'}> <LinkItem>Philosophy</LinkItem></Link>
                <Link to={'/quarterly-newsletter'}> <LinkItem>Quarterly Newsletter</LinkItem></Link>
                <Link to={'/blogs'}> <LinkItem>Blogs</LinkItem></Link>
                <Link to={'/contact'}> <LinkItem>Contact Us</LinkItem></Link>
                <Link to={'/disclosure'}> <LinkItem>Disclosure</LinkItem></Link>
            </Stack>
            <Button variant={'outline'} leftIcon={<IoDocumentTextOutline size={20} />} _hover={{ bg: 'white', color: 'primary.500' }} color={'white'} size="md" fontWeight={400} textTransform={'uppercase'} rounded="md"
                as={ChakraLink} href={InvestorCharter} target="_blank" isExternal>
                Investor Charter
            </Button>
        </Stack>
    )
}


export const LinkItem = (props: ButtonProps) => {
    return (
        <Button variant={'link'} color='white' textTransform={'uppercase'} fontSize={14} fontWeight={'regular'}  {...props}>{props.children}</Button>
    )
}

export const ContactLinks = () => (
    <Stack spacing={{ base: '4', md: '8' }}>
        <Heading as="h3" color={useColorModeValue('gray.50', 'white')} fontSize="2xl" fontWeight="medium" letterSpacing="wider">
            Contact Us
        </Heading>
        <Stack spacing={6}>
            <HStack spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoCallOutline color={'white'} />
                </Stack>
                <ChakraLink fontWeight={400} color='white' href="tel:+919611877783">+91 9611877783</ChakraLink>
            </HStack>
            <HStack spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoMailOutline color={'white'} />
                </Stack>
                <ChakraLink fontWeight={400} color='white' href="mailto:gaurav@kormancapital.com">gaurav@kormancapital.com</ChakraLink>
            </HStack>
            <HStack alignItems={'start'} spacing={3}>
                <Stack justifyContent={'center'} alignItems={'center'} boxSize={8} rounded={'full'} borderWidth={'1px'} borderColor='white'>
                    <IoLocationOutline color={'white'} />
                </Stack>
                <Text color='white'>Korman Capital Investment Advisors LLP,<br /> Wework Prestige Atlanta, 80 Feet Main Road,<br /> Koramangala 1A Block,<br /> Bangalore, Karnataka 560034</Text>
            </HStack>
        </Stack>
    </Stack >
)



export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
    return (
        <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
            <Stack spacing="4">
                <Text color={'white'}>Get notified when we add newsletter or we have exciting news for you.</Text>
                <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
                    <Input
                        bg={useColorModeValue('white', 'inherit')}
                        placeholder="Enter your email"
                        type="email"
                        required
                        focusBorderColor={useColorModeValue('secondary.500', 'secondary.300')}
                        _placeholder={{
                            opacity: 1,
                            color: useColorModeValue('gray.500', 'whiteAlpha.700'),
                        }}
                    />
                    <Button
                        type="submit"
                        colorScheme="secondary"
                        flexShrink={0}
                        width={{ base: 'full', md: 'auto' }}
                    >
                        Subscribe
                    </Button>
                </Stack>
            </Stack>
        </chakra.form>
    )
}