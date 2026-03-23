import { FC, ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const Title: FC<Props> = ({ children }: Props) => {
   return <div className="text-xl font-bold">{children}</div>;
};

export default Title;
