import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import LoginIcon from '@mui/icons-material/Login';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Login = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loginCheck, setLoginCheck] = useState(false);
    const [checkMessage, setCheckMessage] = useState('');

    const handleClose = () => {
        props.isLoginedClosed();
        setIsLoading(false);
        setCheckMessage('');
        setMobileNumber('')
        setPassword('');
        setOpen(false)
    };

    useEffect(() => {
        if (props.isLoginClicked) {
            handleOpen();
        } else {
            handleClose();
        }
    }, [props.isLoginClicked])

    const mobileHandler = (event) => {
        setMobileNumber(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const login = () => {
        setIsLoading(true);
        const data = {
            mobileNumber: mobileNumber,
            password: password
        }
        fetch('http://localhost:3000/api/auth/signin',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            }).then(res => res.json())
            .then(data => {
                if (data.status === 1) {
                    localStorage.setItem('isLogin', '1');
                    localStorage.setItem('id', data.id);
                    localStorage.setItem('mobileNumber', data.mobileNumber);
                    localStorage.setItem('username', data.username);
                    localStorage.setItem('accessToken', data.accessToken);
                    props.isLogin(1);
                    handleClose();
                } else {
                    setMobileNumber('');
                    setPassword('');
                    setLoginCheck(true);
                    setCheckMessage(data.message)
                }
                setIsLoading(false);


            })
            .catch(err => {
                props.isLogin(0);
            });
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h4" display="block">Login</Typography><br></br>
                    {loginCheck && <Typography variant="p" display="block" color="error">{checkMessage}</Typography>}
                    <TextField id="mobile" value={mobileNumber} label="mobile" variant="standard" fullWidth onChange={mobileHandler} /><br></br>
                    <TextField id="password" value={password} type="password" label="password" variant="standard" fullWidth onChange={passwordHandler} />
                    <div className="login-section">
                        {isLoading ? <LoadingButton size="small"
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                            className="button-input-field"
                        >
                            Logging
                </LoadingButton> : <Button variant="outlined" size="large" className="login-button" endIcon={<LoginIcon />} onClick={login}>Login</Button>}
                        <Button variant="contained" color="error" size="large" className="login-close-button" endIcon={<CancelPresentationIcon />} onClick={handleClose}>Close</Button>
                    </div>

                </Box>
            </Modal>
        </>
    )
}


export default Login;

