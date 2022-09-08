import React, { useState } from 'react';
import ModalContent from "./ModalContent";

function Modal(props) {
    const [open, setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>open</button>
            {open && (
                <ModalContent isOpen={setIsOpen}>
                    {props.children}
                </ModalContent>
            )}
        </div>
    );
}

export default Modal;