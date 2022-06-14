import styled from "styled-components";

export const SecondarySummary = styled.div`
        
        display: flex;
        justify-content: space-around;

        strong{
            
            margin-top: 1rem;
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 3rem;
            

            
        }

        .total-container{
            background: var(--red);
            padding: 1.5rem 2rem;
            border-radius: 0.4rem;
            color: #fff;
            transition: .4s;
            
         
        }
`;

export const Main = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;

    .other-data-container{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.4rem;
        color: var(--text-title);
        margin-top: 1rem;
    }
`;

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: -9rem;
    

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.4rem;
        color: var(--text-title);
        transition: .4s;

        &:hover{
            background: var(--blue-light);
            color: #fff;
        }

        header{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 3rem;
            font-weight: 500;
            line-height: 3rem;
            color: var(--red);

            
        }

        h3, strong, p {
            margin-bottom: 1rem;
        }
        p{
            font-size: .9rem;
        }
    }
`;
