import { useState } from "react";


interface SelectorProps {
    inputPlaceholderSetter: string;
    selectName: string;
    labelText: string;

}
export function Selector({
    selectName,
    labelText,
    inputPlaceholderSetter
}: SelectorProps) {
    const [carMake, setCarMake] = useState('BMW');
    const [carModel, setCarModel] = useState('');

    const carMakes = [
        { value: 'BMW', content: 'BMW' },
        { value: 'Renault', content: 'Renault' },
        { value: 'Opel', content: 'Opel' },
        { value: 'Volkswagen', content: 'Volkswagen' },
        { value: 'Fiat', content: 'Fiat' },
    ]

    return (

        <>
            <label key={`selectName${+4}`} htmlFor={selectName}>{labelText}</label>
            <select
                key={`selectName${+2}`}
                name={selectName}
                value={carMake}
                onChange={(e) => setCarMake(e.target.value)}
            >
                {carMakes.map(make => (
                    <>
                        <option value={make.value}>{make.content}</option>
                    </>
                ))}
            </select>
            <input
                key={`selectName${+1}`}
                type="text"
                value={carModel}
                placeholder={inputPlaceholderSetter}
                onChange={(e) => setCarModel(e.target.value)}
            />
        </>
    );
}
