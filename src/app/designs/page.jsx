'use client'

import { Bounce, toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';

const Button  = styled.button`
    width: 100px;
    height: 50px;
`

const Form = styled.input`
    width: 100px;
    border: 2px solid #a78bfa;
    border-radius: 5px;
    margin-top: 10px;
    &:focus {
        outline: none;
    }
`

export default function Design() {
    const showToast = () => toast.success('LOL',{
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: false,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });

    return(
        <div>
            <Button onClick={showToast}>LOL</Button><br></br>
            <Form placeholder='Input Here'></Form>
            <ToastContainer />
        </div>
    )
}