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
            <label htmlFor={selectName}>{labelText}</label>
            <select
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
                type="text"
                value={carModel}
                placeholder={inputPlaceholderSetter}
                onChange={(e) => setCarModel(e.target.value)}
            />
        </>
    );
}
