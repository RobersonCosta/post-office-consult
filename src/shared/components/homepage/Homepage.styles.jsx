import styled from 'styled-components';



const Container = styled.div`
    @-webkit-keyframes shine {
        100% {
            left: 125%;
        }
    }
    @keyframes shine {
        100% {
            left: 125%;
        }
    }
    width: 100%;
    height: 100vh;
    display: flex;    
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    .banner {
        width: auto;
        height: 250px;
        margin-bottom: 30px;
        -webkit-filter: grayscale(0) blur(0);
        filter: grayscale(0) blur(0);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
    }
    .banner:hover {
        -webkit-filter: grayscale(50%) blur(1px);
        filter: grayscale(50%) blur(1px);
    }
`


export {
    Container
}