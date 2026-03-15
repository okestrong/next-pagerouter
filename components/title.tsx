import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Title: FC<Props> = ({ children }: Props) => {
   return <div className="text-4xl">{children}</div>;
};

export default Title;
