import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Input = ({ setRepository }) => {
  const formSchema = yup.object().shape({
    "full_name": yup.string().required("Repositório inexistente"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunc = (data) => {
    setRepository(data);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmitFunc)}>
        <input placeholder="Digite o nome do usuário" {...register("full_name")} />
        
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};
