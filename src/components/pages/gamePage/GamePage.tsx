import React, { useCallback, useMemo, useState } from 'react';
import './GamePage.scss';
import data from '../../../data/questions.json';
import OptionsButton from '../optionButton/OptionButton';
import WinList from '../winList/WinList';
import BurgerMenu from '../../burgerMenu/BurgerMenu';
import classNames from 'classnames';
import { useBreakpoints } from 'react-match-breakpoints';

interface Props {
  setGameBegun: (e: boolean) => void;
  setTheEndedGame: (e: boolean) => void;
  setRemuneration: (e: string) => void;
}

const GamePage = ({ setRemuneration, setGameBegun, setTheEndedGame }: Props): JSX.Element => {
  const breakpoints = useBreakpoints();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [showWin, setShowWin] = useState<boolean>(false);
  const receivedData = useMemo(() => data.map((i) => i), []);

  const currentQuestion = useMemo(() => receivedData[questionNumber], [receivedData, questionNumber]);
  const prevQuestionReward = useMemo(
    () => (questionNumber ? receivedData[questionNumber - 1].remuneration : '$0'),
    [receivedData, questionNumber],
  );

  const finishGame = useCallback(
    (remuneration = prevQuestionReward) => {
      setRemuneration(remuneration);
      setGameBegun(false);
      setTheEndedGame(true);
    },
    [prevQuestionReward, setRemuneration, setGameBegun, setTheEndedGame],
  );

  const nextQuestion = useCallback(() => {
    if (questionNumber === receivedData.length - 1) {
      finishGame(currentQuestion.remuneration);
    } else {
      setQuestionNumber((prev) => prev + 1);
    }
  }, [currentQuestion.remuneration, questionNumber, finishGame, setQuestionNumber, receivedData.length]);

  return (
    <section className="game">
      <div className="wrapper">
        <h2 className="title">{currentQuestion.question}</h2>

        <div className="answers">
          {currentQuestion.options.map((item) => {
            return (
              <OptionsButton
                key={item.letter}
                letter={item.letter}
                text={item.option}
                currentQuestion={currentQuestion}
                nextQuestion={nextQuestion}
                finishGame={finishGame}
              />
            );
          })}
        </div>
      </div>

      <div className={classNames('overlay', { ['overlay--open']: showWin })}>
        <aside className="win">
          <WinList
            remuneration={receivedData.map((item) => item.remuneration).reverse()}
            questionNumber={questionNumber}
          />
        </aside>
      </div>

      {breakpoints.mobileAndTablet && <BurgerMenu setShowWin={setShowWin} />}
    </section>
  );
};

export default GamePage;
