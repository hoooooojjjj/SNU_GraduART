import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../ServerClient.js';

Modal.setAppElement('#root');

const Login = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const signInWithGoogle = async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })

        if (error) {
            console.error('Error signing in with Google:', error.message)
        } else {
            const user = supabase.auth.getUser
            if (user) {
                // Call the serverless function to insert the user data
                const response = await fetch('/.netlify/functions/registerUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: user.id,
                        created_at: new Date().toISOString(),
                    }),
                })

                if (response.ok) {
                    const userData = await response.json()
                    console.log('User data inserted:', userData)
                } else {
                    const errorData = await response.json()
                    console.error('Error inserting user data:', errorData.error)
                }
            }
        }
    }

    return (
        <div>
            <script src="https://accounts.google.com/gsi/client?hl=ko" async></script>
            <button onClick={openModal}>Login</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Login Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <h2>Login</h2>
                <div id="g_id_onload"
                     data-locale="ko"
                     data-client_id = "887642201474-dlcahndjduspb0rpnpieui1mqpo6btoo.apps.googleusercontent.com"
                     data-login_uri="https://127.0.0.1/"
                     data-auto_prompt="false">
                </div>
                <div className="g_id_signin"
                     data-type="standard"
                     data-size="large"
                     data-theme="outline"
                     data-text="sign_in_with"
                     data-shape="rectangular"
                     data-logo_alignment="left">
                </div>
        <button onClick={signInWithGoogle}>Login with Google</button>
        <button onClick={closeModal}>Close</button>
    </Modal>
</div>
)
    ;
};

export default Login;