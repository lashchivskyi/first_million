import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import './OptionButton.scss';

enum StatusBtn {
  SELECTED = 'selected',
  CORRECT = 'correct',
  WRONG = 'wrong',
}

interface Options {
  letter: string;
  option: string;
}

interface Item {
  question: string;
  options: Options[];
  correctOption: string[];
  remuneration: string;
}

interface Props {
  letter: string;
  text: string;
  currentQuestion: Item;
  nextQuestion: () => void;
  finishGame: () => void;
}

const OptionButton = ({ letter, text, currentQuestion, nextQuestion, finishGame }: Props): JSX.Element => {
  const [selected, setSelected] = useState<boolean>(false);
  const [correct, setCorrect] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  const handleCorrectAnswer = useCallback(() => {
    setCorrect(true);

    setTimeout(() => {
      nextQuestion();
      setCorrect(false);
    }, 1000);
  }, [nextQuestion]);

  const handleWrongAnswer = useCallback(() => {
    setWrong(true);

    setTimeout(() => {
      finishGame();
    }, 1000);
  }, [finishGame]);

  const handleClick = useCallback(
    (e: React.SyntheticEvent<HTMLButtonElement>) => {
      setSelected(true);
      const letter = e.currentTarget.dataset.letter ? e.currentTarget.dataset.letter : '';
      e.persist();

      setTimeout(() => {
        setSelected(false);
        currentQuestion.correctOption.includes(letter) ? handleCorrectAnswer() : handleWrongAnswer();
      }, 2000);
    },
    [currentQuestion.correctOption, handleCorrectAnswer, handleWrongAnswer],
  );

  let stateClass = '';

  switch (true) {
    case selected:
      stateClass = StatusBtn.SELECTED;
      break;
    case correct:
      stateClass = StatusBtn.CORRECT;
      break;
    case wrong:
      stateClass = StatusBtn.WRONG;
      break;
    default:
      stateClass = '';
  }

  return (
    <button className={classNames('answerBtn', `answerBtn--${stateClass}`)} onClick={handleClick} data-letter={letter}>
      <span className="topHexagon"></span>
      <span className="letter">{letter}</span>
      <span className="text">{text}</span>
      <span className="bottomHexagon"></span>
    </button>
  );
};

export default OptionButton;
