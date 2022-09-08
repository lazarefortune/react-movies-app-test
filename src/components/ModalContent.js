import React from 'react';
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 1000,
    padding: '30px',
    backgroundColor: '#fff',
    transform: 'translate(-50%,-50%)'
};
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
};

function ModalContent({ children, isOpen }) {
    return (
        <>
            <div style={OVERLAY_STYLES} onClick={() => isOpen(false)} />
            <div style={MODAL_STYLES}>{children}</div>
        </>
    );
}

export default ModalContent;
