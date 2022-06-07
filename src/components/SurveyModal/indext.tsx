import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './style';

interface SurveyModalProps {
    isOpen: boolean;
}

Modal.setAppElement('#root');

export function SurveyModal({ isOpen }: SurveyModalProps) {

    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('M');
    const [hasDrivingLicense, setHasDrivingLicense] = useState(false);
    const [isFirstCar, setIsFirstCar] = useState(false);
    const [numberOfCars, setNumberOfCars] = useState(0);

    const [submitScreenMessage, setSubmitScreenMessage] = useState('Thank you for participating! Click below to submit your answers');

    const [renderPartOne, setRenderPartOne] = useState(true);
    const [renderPartTwo, setRenderPartTwo] = useState(false);
    const [renderPartThree, setRenderPartThree] = useState(false);
    const [renderLastPart, setRenderLastPart] = useState(false);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);


    function handleChange(event: any) {
        setAge(Number(event.target.value));


    }
    // --------------------------- Handling Parts Functions ------------------------
    function handleAgeCondition() {
        console.log(gender);

        setRenderPartOne(false);
        age < 18
            ? setShowSubmitMessage(true)
            : setRenderPartTwo(true);

    }

    function handleDrivingLicenseCondition() {
        console.log(hasDrivingLicense);

        setRenderPartTwo(false);

        const ageCondition = age >= 18 && age <= 25;

        if (hasDrivingLicense) {
            ageCondition
                ? setRenderPartThree(true)
                : setRenderLastPart(true);
        } else {
            setShowSubmitMessage(true);
        }

    }
    function handleFirstCarCondition() {
        console.log(isFirstCar);

        setRenderPartThree(false);

        isFirstCar
            ? setShowSubmitMessage(true)
            : setRenderLastPart(true);

        if (showSubmitMessage) {
            setSubmitScreenMessage('We are targeting more experienced clients, thank you for your interest')
        }
    }

    function handleLastPart() {
        console.log(isFirstCar);

        setRenderLastPart(false);
        setShowSubmitMessage(true);


    }

    // --------------------------- End of Handling Parts Functions ------------------------

    function handleCreateSurvey(event: FormEvent) {

        event.preventDefault();


    }


    return (
        <Modal
            overlayClassName='react-modal-overlay'
            className='react-modal-content'

            isOpen={isOpen}
        >
            <Container onSubmit={handleCreateSurvey}>

                <h2>Complete the survey</h2>

                {
                    renderPartOne
                        ? <>
                            <label htmlFor="gender-selector">Select your gender:</label>
                            <select
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                                name="gender-selector"
                                value={gender}
                            >
                                <option value="Male">M</option>
                                <option value="Female">F</option>
                                <option value="Other">Other</option>
                            </select>

                            <input type="number" placeholder='Enter your age'
                                onChange={handleChange}
                            />
                            <button onClick={handleAgeCondition} type="button">Next</button>
                        </>
                        : <></>
                }

                {
                    renderPartTwo

                        ?
                        <>
                            <label htmlFor="driving-license-selector">Do you own a car driving license?</label>
                            <select
                                onChange={(e) => {
                                    const value = e.target.value

                                    value === 'yes' ? setHasDrivingLicense(true) : setHasDrivingLicense(false)

                                }}
                                name="driving-license-selector"
                                value={hasDrivingLicense ? 'yes' : 'no'}
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No, prefer using other transport</option>
                            </select>
                            <button onClick={handleDrivingLicenseCondition} type="button">Next</button>
                        </>
                        : <></>
                }

                {
                    renderPartThree
                        ? <>
                            <label htmlFor="age-selector">Is this your first car?</label>
                            <select
                                onChange={(e) => {
                                    const value = e.target.value;

                                    value === 'yes' ? setIsFirstCar(true) : setIsFirstCar(false);
                                }
                                }
                                value={isFirstCar ? 'yes' : 'no'}
                                name="age-selector">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <button onClick={handleFirstCarCondition} type="button">Next</button>
                        </>
                        : <></>
                }

                {
                    renderLastPart
                        ?
                        <>
                            <select name="car-type-selector">
                                <option value="">Which drivetrain do you prefer?</option>
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                                <option value="Not">I don't know</option>
                            </select>

                            <select name="fuel-emission-selector">
                                <option value="">Are you worried about fuel emissions?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>


                            <input type="number" min='0' placeholder="How many cars are there in your family?" />

                            <select name="car-model-selector">
                                <option value="">Which car make and model do you drive?</option>
                            </select>
                            <button onClick={handleLastPart} type="button">Next</button>
                        </>

                        : <></>
                }

                {
                    showSubmitMessage
                        ? <>
                            <h1>{submitScreenMessage}</h1>
                            <button onClick={handleAgeCondition} type="submit">Submit Survey</button>
                        </>
                        : <></>
                }

            </Container>

        </Modal >
    );
}
