import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';
import styles from './Form.module.css';

// interface IProps {
//     withCancel?: boolean
//     type?: 'call' | 'buy'
//     widgetName?: string
//     widgetCompany?: string
// }

const Form = ({ type = 'call', withCancel = false, widgetName = '', widgetCompany = '' }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);

    const form = useRef();

    const timeoutAlert = (setFunc) => {
        setFunc(true);
        setTimeout(() => {
            setFunc(false)
        }, 10000);
    };

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_07ls82e';
        const templateId = type === 'call' ? 'template_p2uhijj' : 'template_b84qllw';
        const publicKey = 'PafYHx17y1oq4c2HI';

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                () => {
                    timeoutAlert(setIsSuccess);
                    resetForm();
                },
                (error) => {
                    timeoutAlert(setIsFailed);
                },
            );
    };

    const handleChange = (e, setFunc) => {
        setFunc(e.target.value);
    }

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}>
            <input
                value={name}
                onChange={(e) => handleChange(e, setName)}
                required
                type="text"
                placeholder='Имя'
                name='user_name' />
            <input
                value={phone}
                onChange={(e) => handleChange(e, setPhone)}
                required
                type="tel"
                placeholder='Номер телефона'
                name='user_phone' />
            <input
                value={email}
                onChange={(e) => handleChange(e, setEmail)}
                required
                type="email"
                placeholder='Почта'
                name='user_email' />
            {type === 'call' ?
                <textarea
                    value={message}
                    onChange={(e) => handleChange(e, setMessage)}
                    required
                    name="message"
                    id="message"
                    placeholder='Ваше сообщение'></textarea>
                :
                <>
                    <input
                        name="widget_company"
                        type="text"
                        placeholder='Компания'
                        readOnly
                        value={widgetCompany} />
                    <input
                        name="widget_name"
                        type="text"
                        placeholder='Виджет'
                        readOnly
                        value={widgetName} />
                </>
            }

            <div className={styles.button_group}>
                <Button size='s' width={true} type='submit'>Отправить</Button>
                {withCancel
                    &&
                    <Button
                        size='s'
                        onClick={() => resetForm()}
                        color='cancel'
                        width={true}>
                        Очистить
                    </Button>}
            </div>
            {isSuccess && <div className={styles.success}>Заявка успешно отправленна. Ожидайте, скоро мы с вами свяжемся.</div>}
            {isFailed && <div className={styles.failed}>Произошла ошибка, повторите попытку позже!</div>}
        </form>
    )
}

export default Form;