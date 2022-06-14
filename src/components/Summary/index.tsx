import { useEffect, useState } from "react";
import { Container, Main, SecondarySummary } from "./styles";


export function Summary() {
    const [adolescents, setAdolescents] = useState(11);
    const [unlicensed, setUnlicensed] = useState(5);
    const [firstTimers, setFirstTimers] = useState(13);
    const [targetables, setTargetables] = useState(38);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(adolescents + unlicensed + firstTimers + targetables)
    },
        [adolescents, unlicensed, firstTimers, targetables]);

    function setPercentual(index: number): number {
        const percentual = (index / total) * 100
        console.log(percentual)

        return Number(percentual.toFixed(2));
        //number aproximation is not accurate
    }

    return (
        <>
            <Main>

                <Container>
                    <div>
                        <header>
                            <h3>Adolescents</h3>
                            <strong>{adolescents}</strong>
                            <p>Equivalent percentage: {setPercentual(adolescents)}%</p>
                        </header>
                    </div>

                    <div>
                        <header>
                            <h3>Unlicensed</h3>
                            <strong>{unlicensed}</strong>
                            <p>Equivalent percentage: {setPercentual(unlicensed)}%</p>
                        </header>
                    </div>

                    <div>
                        <header>
                            <h3>First-timers</h3>
                            <strong>{firstTimers}</strong>
                            <p>Equivalent percentage: {setPercentual(firstTimers)}%</p>
                        </header>
                    </div>
                    <div>
                        <header>
                            <h3>Targetables</h3>
                            <strong>{targetables}</strong>
                            <p>Equivalent percentage: {setPercentual(targetables)}%</p>
                        </header>
                    </div>



                </Container>
                <div className="other-data-container">
                    <h2>Other Data:</h2>
                    <SecondarySummary>
                        <div>
                            <div>

                                <p>Targetables worried about fuel emissions: <strong>8</strong> </p>
                                <p>Targetables choosing FWD or 'I dont know' for drive train: <strong>19</strong></p>
                                <p>Avarage amount of cars/family:  <strong>3.2</strong></p>
                            </div>

                        </div>
                        <div className="total-container">
                            <header>Total Responses</header>
                            <strong>{total}</strong>
                        </div>
                    </SecondarySummary>

                </div>
            </Main>
        </>
    )
}