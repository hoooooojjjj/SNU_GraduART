import React, { useState } from 'react';
import Modal from 'react-modal';
import { supabase } from '../ServerClient.js';

Modal.setAppElement('#root');

const Login = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) console.error('Error signing in with Google:', error.message);
        closeModal();
    };

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
                     data-client_id=${process.env.GOOGLE_CLIENT_ID}
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