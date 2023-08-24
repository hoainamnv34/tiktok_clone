import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import avt from '~/assets/images/avt.jpg'

const cx = classNames.bind(styles); 

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avt')} src={avt} alt="avt" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}> nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountsItem;
