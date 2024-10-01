import React from 'react';
import {
    Box,
    VStack,
    HStack,
    Heading,
    Text,
    Button,
    Input,
    Flex,
    Grid,
    Avatar,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Container,
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

// 가상의 사용자 상태
const user = {
    isLoggedIn: true,
    name: '홍길동',
    avatar: 'https://bit.ly/dan-abramov',
};

// 게시물 컴포넌트
const Post = ({ title, excerpt }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{excerpt}</Text>
    </Box>
);

// 네비게이션 메뉴
const NavMenu = () => (
    <VStack align="stretch" spacing={4}>
        <Button colorScheme="teal" variant="ghost">홈</Button>
        <Button colorScheme="teal" variant="ghost">게시판</Button>
        <Button colorScheme="teal" variant="ghost">이벤트</Button>
        <Button colorScheme="teal" variant="ghost">설정</Button>
    </VStack>
);

const HomePage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="gray.100" minH="94vh">
            {/* 헤더 */}
            <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        커뮤니티
                    </Heading>
                </Flex>

                <Flex align="center">
                    {user.isLoggedIn ? (
                        <HStack spacing={4}>
                            <Text display={{ base: "none", md: "block" }}>{user.name}님</Text>
                            <Avatar size="sm" name={user.name} src={user.avatar} />
                        </HStack>
                    ) : (
                        <Button colorScheme="teal" variant="outline">
                            로그인
                        </Button>
                    )}
                    <IconButton
                        display={{ base: "flex", lg: "none" }}
                        aria-label="메뉴"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        onClick={onOpen}
                        ml={4}
                    />
                </Flex>
            </Flex>

            {/* 메인 콘텐츠 */}
            <Container maxW={{ base: "100%", md: "90%", lg: "1100px", xl: "1400px" }} p={4}>
                <Grid templateColumns={{ base: "1fr", lg: "250px 1fr" }} gap={6}>
                    {/* 사이드바 - 데스크톱에서만 표시 */}
                    <Box display={{ base: "none", lg: "block" }}>
                        <NavMenu />
                    </Box>

                    <Box as="main">
                        <VStack spacing={6} align="stretch">
                            {/* 검색 바 */}
                            <Flex>
                                <Input placeholder="검색어를 입력하세요" mr={2} bg="white" />
                                <IconButton aria-label="검색" icon={<SearchIcon />} colorScheme="teal" />
                            </Flex>

                            {/* 게시물 관련 버튼 */}
                            <Flex justify="space-between" align="center">
                                <Heading as="h2" size="md">
                                    최근 게시물
                                </Heading>
                                <HStack>
                                    <Button colorScheme="teal" variant="outline">이벤트</Button>
                                    <Button colorScheme="teal" variant="solid">게시판</Button>
                                </HStack>
                            </Flex>

                            {/* 게시물 목록 */}
                            <VStack spacing={4} align="stretch">
                                <Post title="첫 번째 게시물" excerpt="이것은 첫 번째 게시물의 내용입니다. 더 긴 내용을 추가하여 레이아웃을 테스트합니다." />
                                <Post title="두 번째 게시물" excerpt="이것은 두 번째 게시물의 내용입니다. 다양한 길이의 내용으로 테스트합니다." />
                                <Post title="세 번째 게시물" excerpt="이것은 세 번째 게시물의 내용입니다. 게시물의 다양성을 보여주기 위해 다른 길이의 내용을 사용합니다." />
                            </VStack>

                            {/* 더보기 버튼 */}
                            <Button colorScheme="teal" variant="outline" alignSelf="center">
                                더보기
                            </Button>
                        </VStack>
                    </Box>
                </Grid>
            </Container>

            {/* 네비게이션 드로어 - 모바일에서만 표시 */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>메뉴</DrawerHeader>
                    <DrawerBody>
                        <NavMenu />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default HomePage;