import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom/client';
import App from './../src/components/app/App';
import reportWebVitals from './reportWebVitals';
import { ConfigStructure, initBreakpoints } from 'react-match-breakpoints';

const breakpointsConfig: ConfigStructure<string> = {
  mobile: 'screen and (max-width: 575px)', // up to "sm"
  mobileAndTablet: 'screen and (max-width: 991px)', // up to "lg"
  tablet: 'screen and (min-width: 576px) and (max-width: 991px)', // from "sm" to "lg"
  tabletAndDesktop: 'screen and (min-width: 576px)', // from "sm"
  desktop: 'screen and (min-width: 992px)', // from "lg"
  largeDesktop: 'screen and (min-width: 1250px)', // from "xl"
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BreakpointsProvider: FunctionComponent<any> = initBreakpoints(breakpointsConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BreakpointsProvider>
      <App />
    </BreakpointsProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
