import styled from "styled-components";

export const Container = styled.header`
    
    background: var(--blue);

`;

export const Content = styled.div`
    max-width: 1120px;

    margin: 0 auto;
    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        max-height: 3rem;
    }

    button{
        height: 3rem;

        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;

        transition: filter .3s;
        
        &:hover{
            filter: brightness(.9);
        }
    }
`;