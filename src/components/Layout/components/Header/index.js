import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import logo from '~/assets/images/logo.svg';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AcccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    { icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to:'/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 0);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo_wrapper')}>
                    <img src={logo} alt="logo" className={cx('logo')} />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem></AccountsItem>
                                <AccountsItem></AccountsItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search_wrapper')}>
                        <input
                            className={cx('search_input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('btn_clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <button className={cx('btn_search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('')} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Register</Button>
                    <Button primary>Log in</Button>

                    {/* <Tippy
                        interactive
                        visible
                        placement='bottom-end'
                        render={(attrs) => (
                            <div className={cx('menu-items')} {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountsItem></AccountsItem>
                                    <AccountsItem></AccountsItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                       
                    </Tippy> */}

                    <Menu items = {MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
