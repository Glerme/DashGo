import { Flex } from '@chakra-ui/react';
import Logo from './Logo';
import Notifications from './Notifications';
import Profile from './Profile';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      marginX="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Search />

      <Flex align="center" ml="auto">
        <Notifications />

        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
