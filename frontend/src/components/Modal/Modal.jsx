import React from 'react';
import Botao from '../Botao/Botao';
import style from "./style.css"
//<Modal>Childrean</Modal>
function Modal(props) {

    const { children, aberto, onClose } = props
    if (!aberto) {
        return null
    }
    return (
        <div className='modal'>
            <div className="modal-conteudo">
                {children}
                <Botao
                    texto="Fechar"
                    onClick={onClose}
                />
            </div>
        </div>
    );
}

export default Modal;