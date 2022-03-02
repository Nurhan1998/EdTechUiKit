import cn from 'classnames';

import WhiteSearchIcon from '../Icons/WhiteSearchIcon';
import SearchIcon from '../Icons/SearchIcon';

import { ISearchField } from './types';
import useStyles from './styles';

const SearchField = (props: ISearchField): JSX.Element => {
  const {
    color,
    onButtonClick,
    className,
    ...rest
  } = props;
  const { classes } = useStyles();

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
