import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import NavSection from './NavSection';

const SideBar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Link display="flex" align="center" color="pink.400">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Dashboard
            </Text>
          </Link>
          <Link display="flex" align="center" color="pink.400">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Usuários
            </Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Link display="flex" align="center" color="pink.400">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Formulários
            </Text>
          </Link>
          <Link display="flex" align="center" color="pink.400">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Automação
            </Text>
          </Link>
        </NavSection>
      </Stack>
    </Box>
  );
};

export default SideBar;
