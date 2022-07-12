import React, {FC} from 'react';
import classes from './Modal.module.css';

const Modal :FC= ({active, setActive, children}:any) => {


    return (
        <div className={active ? classes.modal + " " + classes.active : classes.modal}
             onClick={() => setActive(false)}
        >
            <div className={active ? classes.modal__content + " " + classes.active : classes.modal__content}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;