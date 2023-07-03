import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, useCallback, useState } from 'react';

export type CardProps = {
  label: string;
  value: number;
} & ButtonProps;

export const Card: FC<CardProps> = ({
  label,
  value,
  onClick,
  disabled,
  ...props
}) => {
  const [isShow, setShow] = useState<boolean>(false);
  const show = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setShow(true);
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <Button
      colorScheme='gray'
      borderWidth={2}
      w={'40'}
      h={'48'}
      onClick={show}
      disabled={isShow || disabled}
      {...props}
    >
      {isShow && <>{label}</>}
    </Button>
  );
};
