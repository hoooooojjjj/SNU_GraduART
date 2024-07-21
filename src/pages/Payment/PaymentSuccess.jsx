import React, {useContext} from 'react';
import Header from "../../components/Header/Header.jsx";
import {userContext} from "../../App.jsx";
import {useNavigate} from "react-router-dom";

export const PaymentSuccess = () => {

    const [user] = useContext(userContext);

    const navigate = useNavigate();

    return (
        <>
            <Header></Header>
            <div style={styles.container}>
                <div>결제에 성공했습니다!</div>
            </div>
        </>
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

export default PaymentSuccess;