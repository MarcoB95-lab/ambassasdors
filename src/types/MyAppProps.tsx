import type { Session } from 'next-auth';

export type MyAppProps = {
  Component: any;
  pageProps: {
    session?: Session;
  };
};
