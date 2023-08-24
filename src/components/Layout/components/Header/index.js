import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '~/assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountsItem from '~/components/AcccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

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
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
