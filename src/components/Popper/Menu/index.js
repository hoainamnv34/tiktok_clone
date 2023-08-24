import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            // const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    // onClick={() => {
                    //     if (isParent) {
                    //         setHistory((prev) => [...prev, item.children]);
                    //     } else {
                    //         onChange(item);
                    //     }
                    // }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            // visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
