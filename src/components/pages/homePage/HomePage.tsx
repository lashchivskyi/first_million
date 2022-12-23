import React from 'react';
import './HomePage.scss';
import HandImg from '../../../img/Hand';
import { useBreakpoints } from 'react-match-breakpoints';
import backgroundImg from './../../../img/backgroundImg.png';

interface Props {
  theEndedGame: boolean;
  remuneration: string;
  setGameBegun: (e: boolean) => void;
}

const HomePage = ({ theEndedGame, remuneration, setGameBegun }: Props): JSX.Element => {
  const breakpoints = useBreakpoints();

  return (
    <div className={'home'} style={theEndedGame ? {} : { backgroundImage: `url(${backgroundImg})` }}>
      <section className="section">
        <HandImg mobile={breakpoints.mobileAndTablet ? true : false} />

        <div className="wrapper">
          {theEndedGame ? (
            <>
              <span className="score">Total Score:</span>
              <span className="title">{`${remuneration} earned`}</span>
            </>
          ) : (
            <span className="title">Who wants to be a millionaire ?</span>
          )}

          <button className="button" onClick={() => setGameBegun(true)}>
            {theEndedGame ? 'Try Again' : 'Start'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
