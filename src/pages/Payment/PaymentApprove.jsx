import React from 'react';

export const PaymentApprove = () => {
    const handleApprove = () => {

    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handleApprove}>
                결제 승인
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    button: {
        fontSize: '2rem',
        padding: '20px 40px',
        backgroundColor: 'orange',
        color: 'dimgrey',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default PaymentApprove;