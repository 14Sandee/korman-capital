import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack,
    Text
} from '@chakra-ui/react'
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';


interface PageLink {
    name: string,
    url: string,
    isCurrent?: boolean
}
interface Props {
    pages?: PageLink[],
    children?: React.ReactNode
}

export const BreadCrumb = ({ pages, children }: Props) => {

    return (
        <Box>
            <Box py={{ base: 3, md: 6 }} maxW="8xl" mx="auto" px={{ base: '4', md: '8' }} >
                <HStack w='full' spacing={'3'} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'start', md: 'center' }}>
                    <Breadcrumb
                        mx={{ base: 0, md: 20 }}
                        display='flex'
                        // separator={<ChevronRightIcon boxSize='6' color='gray.500' />}
                        separator={<RxDividerVertical />}
                    >
                        {pages && pages.map(({ name, url, isCurrent }) => <BreadcrumbItem isCurrentPage={isCurrent} key={url}>
                            <BreadcrumbLink as={Link} to={url} fontWeight='semibold' color={isCurrent ? 'gray.600' : 'primary.500'} fontSize='sm'>
                                <Text color={isCurrent ? 'primary.200' : 'primary.500'}>
                                    {name}
                                </Text>
                            </BreadcrumbLink>
                        </BreadcrumbItem>)}
                    </Breadcrumb>
                    {children}
                </HStack>
            </Box>
        </Box>
    )
}