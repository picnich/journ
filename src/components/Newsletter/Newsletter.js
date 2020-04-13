import React from "react"
import IconClose from "../../images/icon-close.svg"
import {
    Overlay, 
    Container, 
    Content
} from "./styles"

import Form from "./Form"

const Newsletter = ({ inView, handleClick }) => {
    const handleClose = () => {
        // console.log(localStorage.getItem("popup"))
        localStorage.setItem('popup', true);
        handleClick();
    }
    return (
        <div style={{zIndex: 2, display: `${inView ? "block" : "none"}`}}>
            <Overlay />
            <Container>
                <Content>
                    <h3>Sign up to our newsletter</h3>
                    <p>Get our latest product releases and company updates</p>
                    <Form />
                    <p className="terms">By submitting you agree to our Terms & Conditions</p>
                </Content>
                <IconClose className="close" onClick={handleClose} />
            </Container>
        </div>
    )
}

export default Newsletter