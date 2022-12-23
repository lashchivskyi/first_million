import React, { useMemo } from 'react';
import './WinList.scss';

interface Props {
  remuneration: string[];
  questionNumber: number;
}

const WinList = ({ remuneration, questionNumber }: Props): JSX.Element => {
  const rewardsLength = useMemo(() => remuneration.length - 1, [remuneration.length]);

  return (
    <ul className="rewardsList">
      {remuneration.map((reward, i) => {
        const reversedIndex = rewardsLength - i;

        let state = '';
        if (reversedIndex === questionNumber) {
          state = 'current';
        } else if (reversedIndex < questionNumber) {
          state = 'previous';
        }

        return (
          <li className={`item item--${state}`} key={reward}>
            <span className="topHexagon"></span>
            <span className="text">{reward}</span>
            <span className="bottomHexagon"></span>
          </li>
        );
      })}
    </ul>
  );
};

export default WinList;
