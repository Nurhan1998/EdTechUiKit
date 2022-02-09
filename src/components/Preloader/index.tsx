import cn from 'classnames';

import classes from './styles.module.scss';
import { IPreloader } from './types';

const Preloader = ({ className }: IPreloader): JSX.Element => (
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
export default Preloader;
