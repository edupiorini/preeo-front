import { FormEvent } from 'react';
import Modal from 'react-modal';
import { Container } from './style';

interface SurveyModalProps {
    isOpen: boolean;
}


Modal.setAppElement('#root');

export function SurveyModal({ isOpen }: SurveyModalProps) {


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

                <input type="number" placeholder='Enter your age' />

                <select name="gender-selector" >
                    <option value="">Enter your gender</option>
                    <option value="Male">M</option>
                    <option value="Female">F</option>
                    <option value="Other">Other</option>
                </select>
                <button type='submit'>Next</button>
            </Container>

        </Modal >
    );
}