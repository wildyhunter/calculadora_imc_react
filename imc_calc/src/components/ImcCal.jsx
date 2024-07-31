import { useState } from 'react';
import './ImcCal.css';
import Button from './Button';

const ImcCal = ({calcImc}) => {
    const [height, setHeigth] = useState('');
    const [weight, setWeight] = useState('');

    const clearForm = (e) => {
        e.preventDefault();
        setHeigth('');
        setWeight('');
    };

    const validDigits = (text)=> {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e)=> {
        const updatevalue = validDigits(e.target.value)

        setHeigth(updatevalue)
    }

    const handleWeightChange =(e)=> {
        const updatevalue = validDigits(e.target.value)
        setWeight(updatevalue)
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo: 1,75"
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Exemplo: 70,5"
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="calcular" action={(e)=>calcImc(e,height, weight)} />
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                </div>
            </form>
        </div>
    );
};

export default ImcCal;
