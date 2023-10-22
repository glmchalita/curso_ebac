const Form = ({ setWeight, setHeight }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setWeight(e.target.weight.value);
    setHeight(e.target.height.value);
    e.target.weight.value = "";
    e.target.height.value = "";
  };

  return (
    <section id="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row mt-5">
          <div className="col form-floating mb-3">
            <input className="form-control" name="weight" type="number" placeholder="Peso (kg)" />
            <label className="ms-2">Peso (kg)</label>
          </div>

          <div className="col form-floating">
            <input className="form-control" name="height" type="number" placeholder="Ex: 165" />
            <label className="form-label ms-2">Altura (cm)</label>
          </div>
        </div>
        <div className="row mt-4 d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-info">
              Calcular
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
