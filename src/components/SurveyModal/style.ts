import styled from "styled-components";

export const Container = styled.form`

h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input, select{
    width: 100%;
    padding: 0 .5rem;
    height: 3rem;

    border: 1px solid #d7d7d7;
    border-radius: .25rem;

    background: #e7e9ee;

    label{
        color: var(--text-body);
    }

    &::placeholder{
            color: var(--text-body);
        }

    & + input  {
        margin-top: 1rem;
    }
    & + select  {
        margin-top: 1rem;
    }

    
}


option{
    font-size: 1rem;
}

label{
        color: var(--text-body);
        font-size: .9rem;
        padding-left: .5rem;
        }



button{
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    
    background: var(--green);
    color: #fff;

    border-radius: .25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    margin-top: 1.5rem;

    transition: filter .3s;
    
    &:hover{
        filter: brightness(.9);
    }
}

`;