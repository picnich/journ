import styled from "styled-components"
import BGImage from "../../images/newsletter-bg.png"

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.4);
    top: 0;
    left: 0;
    z-index: 1;
`

export const Container = styled.div`
    z-index: 1;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    padding: 64px;
    background: var(--c-darkgreen);
    background-image: url(${BGImage});
    background-size: cover;

    @media screen and (min-width: 768px) {
        padding: 32px;
    }
    svg.close {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
        z-index: 2;

    }
`

export const Content = styled.div`
    background: var(--c-darkgreen);
    max-width: 310px;
    padding: 24px;

    @media screen and (min-width: 768px) {
        padding: 50px;
        max-width: 650px;
    }


    h3, p {
        color: white;
        text-align: center;
    }
    h3 {
        font-size: 24px;
        margin: 0;
        @media screen and (min-width: 768px) {
            font-size: 48px;
        }
    }

    p {
        font-size: 14px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
    }
    .terms {
        font-size: 12px;
        color: #DCEDD4;
        max-width: 80%;
    }
    form {
        display: grid;
        grid-template-columns: 1fr 76px;
        height: 54px;
        max-width: 450px;

        input[type="text"] {
            padding: 12px;
            font-size: 14px;
        }
        button {
            cursor: pointer;
            background: var(--c-journpeach);
            -webkit-appearance: none;
            border: 0;
        }
    }
`