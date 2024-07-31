import { data } from './data/data';
import { useState } from 'react';
import './App.css';
import ImcCal from './components/ImcCal';
import ImcTable from './components/ImcTable';

function App() {
    const calcImc = (e, heigth, weigth) => {
        e.preventDefault();

        if (!weigth || !heigth) return;

        const weigthFloat = +weigth.replace(',', '.');
        const heigthFloat = +heigth.replace(',', '.');

        const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(1);

        setImc(imcResult);

        data.forEach((item) => {
            if (imcResult >= item.min && imcResult <= item.max) {
                setInfo(item.info);
                setInfoClass(item.infoClass);
            }
        });

        if (!info) return
    };

    const resetCalc = (e)=> {
      e.preventDefault()

      setImc("")
      setInfo("")
      setInfoClass("")
    }

    const [imc, setImc] = useState('');
    const [info, setInfo] = useState('');
    const [infoClass, setInfoClass] = useState('');

    return (
        <div className="Container">
            {!imc ? (
                <ImcCal calcImc={calcImc} />
            ) : (
                <ImcTable
                    data={data}
                    imc={imc}
                    info={info}
                    infoClass={infoClass}
                    resetCalc={resetCalc}
                />
            )}
        </div>
    );
}

export default App;
