import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';
import { IProps } from './interface';



const Button = ({ type = 'button', children, size = 's', width = false, color = 'primary', className, ...props }: IProps) => {
    return (
        <button
            {...props}
            type={type}
            className={cn(styles.btn, className, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.width]: width === true,
                [styles.primary]: color === 'primary',
                [styles.cancel]: color === 'cancel',
            })}>{children}</button>
    )
}

export default Button;