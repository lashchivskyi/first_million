import React, { SetStateAction, useCallback, useState } from 'react';
import './BurgerMenu.scss';
import classNames from 'classnames';

interface Props {
  setShowWin: (e: SetStateAction<boolean>) => void;
}

const BurgerMenu = ({ setShowWin }: Props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setOpen((prevState) => !prevState);
    setShowWin((prevState) => !prevState);
  }, [setShowWin]);

  return (
    <div className="btnWrapper" onClick={handleClick}>
      <div className={classNames('btn', { ['open']: open })}>
        <span></span> {/* first line */}
        <span></span> {/* second line */}
        <span></span> {/* third line */}
      </div>
    </div>
  );
};

export default BurgerMenu;
