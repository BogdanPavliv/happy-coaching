import React from 'react';
import styles from '../../styles/button/index.module.scss';
import { ButtonProps } from '../../types/button'

const Button: React.FC<ButtonProps> = ({ children, enementCenter }) => {
  return (
    <a className={enementCenter ? `${styles.action__button} element-center` : `${styles.action__button}`} href="#">{children}</a>
  )
}

export default Button;
