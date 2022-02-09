import cn from 'classnames';

import WhiteSearchIcon from '../Icons/WhiteSearchIcon';
import SearchIcon from '../Icons/SearchIcon';

import { ISearch } from './types';
import classes from './styles.module.scss';

const SearchField = (props: ISearch): JSX.Element => {
  const {
    color,
    onButtonClick,
    className,
    ...rest
  } = props;

  return (
    <div className={cn(classes.searchWrapper, className)}>
      <span onClick={onButtonClick} className={classes.searchIcon}>
        {color === 'white' ?
          <WhiteSearchIcon/>
          :
          <SearchIcon/>}
      </span>
      <input
        {...rest}
        className={classes.searchInput}
      />
    </div>
  );
};

export default SearchField;
