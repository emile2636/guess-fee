import { Box, Card, CardBody, Text, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

export default function FeeCard({ type, est = '0', sample = 0 }: { type: string; est: string; sample: number }) {
  return (
    <Box flex="1">
      <Card bg="white">
        <CardBody>
          <Stat>
            <StatLabel>{type}</StatLabel>
            <StatNumber>
              {Number(est).toFixed(2)}{' '}
              <Text fontSize="xs" display="inline">
                Gwei
              </Text>
            </StatNumber>
            <StatHelpText fontSize="xs">Sample from each block's effective priority fees: {sample} %</StatHelpText>
          </Stat>
        </CardBody>
      </Card>
    </Box>
  );
}
