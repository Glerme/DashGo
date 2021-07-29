import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface INavSection {
  title: string;
  children: ReactNode;
}

const NavSection: React.FC<INavSection> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>

      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
