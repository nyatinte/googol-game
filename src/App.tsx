import { useState } from 'react';

import { Card, CardProps } from './components/Card/Card';
import {
  Button,
  Container,
  Flex,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { shuffle } from './utils/shuffle';

const values: CardProps[] = shuffle([
  { label: '1', value: 1 },
  { label: '5', value: 5 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: '500', value: 500 },
  { label: '999', value: 999 },
  { label: '1000', value: 1000 },
  { label: '5000', value: 5000 },
  { label: '10^100', value: 10 ** 100 },
]);

function App() {
  const [select, setSelect] = useState<null | number>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isJudged, setIsJudged] = useState<boolean>(false);

  const handleJudge = () => {
    if (select == Math.max(...values.map((v) => v.value))) {
      setIsSuccess(true);
    }
    setIsJudged(true);
  };

  return (
    <Container>
      <Text fontSize={'2xl'}>Googol Game</Text>
      <Wrap gap={4} w={'150'} align={'center'} justify={'center'}>
        {values.map((v) => (
          <WrapItem>
            <Card
              key={v.value}
              {...v}
              disabled={isJudged}
              onClick={() => setSelect(v.value)}
            />
          </WrapItem>
        ))}
      </Wrap>
      <Flex justify={'center'} my={4} gap={4}>
        <Button disabled={select == null} onClick={handleJudge}>
          {select ? `${select}で選択` : `選択してください`}
        </Button>
        <Button onClick={() => window.location.reload()}>リセット</Button>
      </Flex>

      {isJudged && (isSuccess ? <p>正解</p> : <p>不正解</p>)}
    </Container>
  );
}

export default App;
