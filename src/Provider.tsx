import React, { createContext, FC, useMemo } from 'react';
import data from './data/questions.json';

// export interface Options {
//   letter: string;
//   option: string;
// }

// export interface Item {
//   question: string;
//   options: Options;
//   correctOption: string;
//   remuneration: string;
// }

export const Context = createContext({});

/***** unfinished Provider *****/
interface ProviderProps {
  children?: any;
}

const Provider: FC = (props: ProviderProps) => {
  const { children } = props;

  const testData = useMemo(() => data.map((i) => i), []);

  const value = {
    testData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;

// export default function WrappedApp(): JSX.Element {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// }
