import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';
import { Selector } from './Selector';
import { Container } from './style';

import closeButton from '../../assets/close.svg';

interface CarListProps {
    name: string;
    id: number;
}
interface Car {
    carNumber: number;
    carMake: string;
    carModel: string;
}
interface Survey {
    gender: string;
    age: number;
    hasDrivingLicense: boolean;
    isFirstCar: boolean;
    driveTrain: 'FWD' | 'RWD' | 'Not' | string;
    fuelEmissionWorried: boolean;
    numberOfCars: number;
    cars?: Car[];
    createdAt: Date;
}

interface NewTransactionModalProps {
    onRequestClose: () => void;
    isOpen: boolean;

}

Modal.setAppElement('#root');

export function SurveyModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('Male');
    const [hasDrivingLicense, setHasDrivingLicense] = useState(false);
    const [isFirstCar, setIsFirstCar] = useState(false);
    const [carType, setCarType] = useState('Not')
    const [numberOfCars, setNumberOfCars] = useState(0);
    const [fuelEmission, setFuelEmission] = useState(false);

    const [dynamicCarList, setDynamicCarList] = useState<CarListProps[]>([])

    const [submitScreenMessage, setSubmitScreenMessage] = useState('Thank you for participating! Click below to submit your answers');

    const [renderPartOne, setRenderPartOne] = useState(true);
    const [renderPartTwo, setRenderPartTwo] = useState(false);
    const [renderPartThree, setRenderPartThree] = useState(false);
    const [renderPartFour, setRenderPartFour] = useState(false);
    const [renderPartFive, setRenderPartFive] = useState(false);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);

    useEffect(() => {

        api.get('/surveys')
            .then(response => console.log(response))
    }, [])

    function handleDynamicSelector() {
        const details = [];
        for (let i = 0; i < numberOfCars; i++) {
            details[i] = {
                id: i,
                name: `car-${i}`
            }
        }
        setDynamicCarList(details);

        console.log(details);
    }


    // --------------------------- Handling Rendering Conditions  ------------------------
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
                : setRenderPartFour(true);
        } else {
            setShowSubmitMessage(true);
        }

    }
    function handleFirstCarCondition() {
        console.log(isFirstCar);

        setRenderPartThree(false);

        isFirstCar
            ? setShowSubmitMessage(true)
            : setRenderPartFour(true);

        if (showSubmitMessage) {
            setSubmitScreenMessage('We are targeting more experienced clients, thank you for your interest')
        }
    }

    function handlePartFour() {
        console.log(isFirstCar);

        handleDynamicSelector();

        setRenderPartFour(false);
        setRenderPartFive(true);


    }
    function handlePartFive() {

        setRenderPartFive(false);
        setShowSubmitMessage(true);


    }

    // --------------------------- End of Handling Parts Functions ------------------------

    async function handleCreateSurvey(event: FormEvent) {

        event.preventDefault();

        const newSurvey: Survey = {
            age,
            gender,
            hasDrivingLicense,
            isFirstCar,
            driveTrain: carType,
            fuelEmissionWorried: fuelEmission,
            numberOfCars,
            createdAt: new Date()
        }

        await api.post('/surveys', newSurvey).then(response => console.log(response.data));

        setAge(0);
        setGender('Male');
        setHasDrivingLicense(false);
        setIsFirstCar(false);
        setCarType('Not');
        setNumberOfCars(0);
        setFuelEmission(false);

        // set to initial state
        setRenderPartOne(true);
        setRenderPartFive(false);
        setShowSubmitMessage(false);
        onRequestClose();


    }

    return (
        <Modal
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            onRequestClose={onRequestClose}

            isOpen={isOpen}
        >
            <button className='react-modal-close' type='button' onClick={onRequestClose}>
                <img src={closeButton} alt="Close modal" />
            </button>
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
                                onChange={e => setAge(Number(e.target.value))}
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
                    renderPartFour
                        ?
                        <>
                            <label htmlFor="car-type-selector">Which drivetrain do you prefer?</label>
                            <select
                                onChange={(e) => setCarType(e.target.value)}
                                value={carType}
                                name="car-type-selector"
                            >
                                <option value="FWD">FWD</option>
                                <option value="RWD">RWD</option>
                                <option value="Not">I don't know</option>
                            </select>

                            <label htmlFor="fuel-emission-selector">Are you worried about fuel emissions?</label>
                            <select
                                onChange={(e) => {
                                    const value = e.target.value;

                                    value ? setFuelEmission(true) : setFuelEmission(false);
                                }
                                }
                                value={fuelEmission ? 'yes' : 'no'}
                                name="fuel-emission-selector"
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>


                            <input
                                onChange={(e) => setNumberOfCars(Number(e.target.value))}
                                type="number"
                                min='0'
                                placeholder="How many cars are there in your family?"
                            />

                            <button onClick={handlePartFour} type="button">Next</button>
                        </>

                        : <></>
                }

                {
                    renderPartFive
                        ?
                        <>
                            {dynamicCarList.map(item => (
                                <Selector
                                    key={item.id}
                                    inputPlaceholderSetter='Enter your car model'

                                    selectName={item.name}
                                    labelText="Which car make do you drive?"

                                />
                            )
                            )
                            }
                            <button onClick={handlePartFive} type="button">Next</button>
                        </>



                        : <></>
                }

                {
                    showSubmitMessage
                        ? <>
                            <h2>{submitScreenMessage}</h2>
                            <button type="submit">Submit Survey</button>
                        </>
                        : <></>
                }

            </Container>

        </Modal >
    );
}
