import cn from 'classnames';

import useStyles from './styles';
import { IPreloader } from './types';

const Preloader = ({ className }: IPreloader): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className={cn(classes.loaderContainer, classes.mostLoader, className)}>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
