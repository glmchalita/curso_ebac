import { useEffect, useState } from "react";
import "./Result.css";

const Result = ({ weight, height }) => {
  const [selected, setSelected] = useState(0);
  const [IMC, setIMC] = useState(0);

  useEffect(() => {
    setIMC((weight / (height / 100) ** 2).toFixed(2));
  }, [weight, height]);

  useEffect(() => {
    if (IMC <= 18.5) {
      setSelected(1);
    } else if (IMC <= 24.9) {
      setSelected(2);
    } else if (IMC <= 29.9) {
      setSelected(3);
    } else if (IMC <= 34.9) {
      setSelected(4);
    } else if (IMC <= 39.9) {
      setSelected(5);
    } else {
      setSelected(6);
    }
  }, [IMC]);

  return (
    <section>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col d-flex justify-content-center">
          <p className="">Seu IMC é: {IMC}</p>
        </div>
      </div>
      <div className="row">
        <div className={`col-2 gx-2 card-container ${selected === 1 && "selected"}`}>
          <span className="text">18,5 ou menos</span>
          <h3 className="title">Abaixo do normal</h3>
          <p className="text">
            Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem
            estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.
          </p>
        </div>
        <div className={`col-2 gx-2 card-container ${selected === 2 && "selected"}`}>
          <span className="text">Entre 18,6 e 24,9</span>
          <h3 className="title">Normal</h3>
          <p className="text">
            Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma
            alimentação equilibrada.
          </p>
        </div>
        <div className={`col-2 gx-2 card-container ${selected === 3 && "selected"}`}>
          <span className="text">Entre 25,0 e 29,9</span>
          <h3 className="title">Sobrepeso</h3>
          <p className="text">
            Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e
            hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade
            pra valer.
          </p>
        </div>
        <div className={`col-2 gx-2 card-container ${selected === 4 && "selected"}`}>
          <span className="text">Entre 30,0 e 34,9</span>
          <h3 className="title">Obesidade grau I</h3>
          <p className="text">
            Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje!
            Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
          </p>
        </div>
        <div className={`col-2 gx-2 card-container ${selected === 5 && "selected"}`}>
          <span className="text">Entre 35,0 e 39,9</span>
          <h3 className="title">Obesidade grau II</h3>
          <p className="text">
            Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o
            acompanhamento próximo de profissionais de saúde.
          </p>
        </div>
        <div className={`col-2 gx-2 card-container ${selected === 6 && "selected"}`}>
          <span className="text">Acima de 40,0</span>
          <h3 className="title">Obesidade grau III</h3>
          <p className="text">
            Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve
            ser ainda mais urgente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Result;
