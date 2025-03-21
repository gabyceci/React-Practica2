import "./form.css"
import Boton from "./Boton";

const Form = () => {
    return (
      <>

<div type="card" className="form">
<div class="grid text-center">
   Número 1: <input class="g-col-2 form-control-sm" type="text" aria-label=".form-control-sm example"/>
</div>
<br />
<div class="grid text-center">
   Número 2: <input class="g-col-2 form-control-sm" type="text" aria-label=".form-control-sm example"/>
</div>
<br />
<Boton
    titulo={'Calcular'}/>
</div>
      </>
    );
  };
  
  export default Form;
  