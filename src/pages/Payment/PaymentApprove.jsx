import React, {useContext} from 'react';
import {isMobile} from "react-device-detect";
import {userContext} from "../../App.jsx";

export const PaymentApprove = () => {

    const urlStr = window.location.href;
    const url = new URL(urlStr);
    const urlParams = url.searchParams;
    const tid = urlParams.get('tid');
    const oid = urlParams.get('oid');
    const pgToken = urlParams.get('pg_token');

    const [user] = useContext(userContext);

    const requestApprove = async (oid, tid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/approvePayment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
                },
                body: JSON.stringify({
                    user_id: user.id,
                    tid: tid,
                    oid: oid,
                    pgToken: pgToken,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error Approving payment:', error);
            throw error;
        }
    };

    //Request Handling (카카오 Request 받아서 처리)
    const handleRequestApprove = async () => {
        try {
            const response = await requestApprove(oid,tid);
            console.log(response);

            setSelectedItems([]);
            setIsCheckedAll(false);
            setRenderKey(renderKey + 1); // Refresh cart items
        } catch (error) {
            console.error('Approve failed:', error);
        }
    };

    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={handleRequestApprove}>
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