import { Icon, Link, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface INavLink {
  icon: ElementType;
}

const NavLink: React.FC = () => {
  return (
    <Link display="flex" align="center" color="pink.400">
      <Icon as={} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        Dashboard
      </Text>
    </Link>
  );
};

export default NavLink;
