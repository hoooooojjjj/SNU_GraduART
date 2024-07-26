import React, {useContext} from 'react';
import {userContext} from "../../App.jsx";
import {useNavigate} from "react-router-dom";
import {
    Container,
    LeftTopContainer,
    Close,
    KakaoPayImg,
    MainContainer,
    MainText,
    Button} from "./PaymentApproveStyle.js"

export const PaymentApprove = () => {

    const urlStr = window.location.href;
    const url = new URL(urlStr);
    const urlParams = url.searchParams;
    const tid = window.localStorage.getItem('temp_tid');
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

    const navigate = useNavigate();
    const paymentSuccessNavigate = () => {navigate(`/paymentSuccess`)};
    const paymentFailNavigate = () => {navigate(`/paymentFail`)};

    //Request Handling (카카오 Request 받아서 처리)
    const handleRequestApprove = async () => {
        try {
            const response = await requestApprove(oid,tid);
            console.log(response);
            paymentSuccessNavigate();
        } catch (error) {
            console.error('Approve failed:', error);
            paymentFailNavigate();
        }
    };

    return (
        <Container>
            <LeftTopContainer>
                <Close />
                <KakaoPayImg src={`/assets/kakaopayImg.png`} alt="카카오페이 이미지" />
            </LeftTopContainer>
            <MainContainer>
                <MainText>
                    카카오페이 결제 후, <br></br>
                    <b>결제완료 </b>버튼을 눌러주세요.
                </MainText>
                <Button onClick={handleRequestApprove()}>결제완료</Button>
            </MainContainer>
        </Container>
    );
};
export default PaymentApprove;