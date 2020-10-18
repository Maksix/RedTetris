import PropTypes from 'prop-types';
import React from "react";
import cn from 'classnames';
import styles from './styles.less';

export const Button = ({text, onClick, theme}) => {
    return (
        <div role={'button'} onClick={onClick} className={cn(styles.button, styles[theme])}>
            <div className={styles.text}>{text}</div>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.oneOf(['dark, light'])
}

Button.defaultProps = {
    theme: 'dark'
}
