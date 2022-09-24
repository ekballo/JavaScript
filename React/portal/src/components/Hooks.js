import { useState, useEffect  } from "react";

const Hooks = () => {
    
    let idade = 30; 
    const [novaIdade, setNovaIdade] = useState(38)

    const changeAge = () => {
        idade = 33;
        console.log(idade);
    };

    const changeNewAge = ()  => {
        setNovaIdade(38);
    };

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar a idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar a nova Idade</button>
        </div>
    );
};

export default Hooks
