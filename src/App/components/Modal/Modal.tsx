import React from "react";
import styles from './Modal.module.css';
import Form from "../Form/Form";
import { createPortal } from "react-dom";

interface IProps {
    setIsModal: (isModal: boolean) => void,
    title: string
    type?: 'call' | 'buy'
    btnCancel?: boolean
    widgetName?: string
    widgetCompany?: string
}

const Modal = ({ type = 'call', setIsModal, title, btnCancel = true, widgetName = '', widgetCompany = '' }: IProps) => {
    const modalNode = document.getElementById('portal_modal');

    if (!modalNode) {
        throw new Error('PORTAL_ERROR');
    }

    return (
        createPortal(
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <h3>{title}</h3>
                    <Form
                        widgetName={widgetName}
                        widgetCompany={widgetCompany}
                        withCancel={btnCancel}
                        type={type} />
                    <button
                        onClick={() => setIsModal(false)}
                        className={styles.btn_close}>×</button>
                </div>
            </div>,
            modalNode
        )
    )
}

export default Modal;