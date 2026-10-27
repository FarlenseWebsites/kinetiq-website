import Link from 'next/link';
import React from 'react';

import { cn } from '../../lib/utils';

interface Props
    extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> {}

const ClientLoginButton = ({ className, ...props }: Props) => {
    return (
        <Link
            href="https://app.kinetiqphysiotherapy.com/"
            className={cn(
                `
  inline-flex items-center justify-center
  whitespace-nowrap
  rounded-lg
  border
  border-black
  bg-white

  px-4
  py-2 font-medium
  text-[#373355]
  shadow-md transition-all duration-300 hover:border-0
  hover:bg-[#68628e] hover:text-white hover:shadow-xl
  active:border-0 active:bg-[#373355]
  active:text-white
`,
                className
            )}
            {...props}
        >
            Client Login
        </Link>
    );
};

export default ClientLoginButton;
