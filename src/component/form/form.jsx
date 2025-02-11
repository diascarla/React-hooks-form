
import { useForm } from 'react-hook-form'
import styled from 'styled-components';

function Form() {

    const { register, handleSubmit, formState: { errors, touchedFields } } = useForm();

    /*
        Usamos a propriedade touchedFields para verificar se o campo foi tocado pelo usuário 
        e juntamente se não há erros no campo, assim mostramos a classe do campo-preenchido.
    */

    const handleSubmitForm = (data) => {
        console.log(data)
    }

    return (

        <main>
            <div className="copy">
                <h1>
                    FICOU COM DÚVIDA <br />
                    NOS MANDE UMA MENSAGEM!
                </h1>
                <p>
                    Caso tenha ficado com alguma duvida, basta nos mandar uma
                    mensagem e entraremos em contato em menos de 24h
                </p>
            </div>

            <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
                <label htmlFor="name" />
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete='off'
                    placeholder="Nome completo *"


                    className={`campo ${errors.name ? "campo-obrigatorio" : "campo preenchido"} ${touchedFields.name && !errors.name
                        ? "campo-preenchido"
                        : ""
                        }`}
                    {...register("name", {
                        required: "* Campo obrigatório",
                    })}
                />
                {errors.name && <Alert>{errors.name.message}</Alert>}

                <label htmlFor="email" />
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete='off'
                    placeholder=" Email *"
                    className={`campo ${errors.email ? "campo-obrigatorio" : "campo preenchido"} ${touchedFields.email && !errors.email
                        ? "campo-preenchido"
                        : ""
                        }`}
                    {...register("email", {
                        required: "* Campo obrigatório",
                    })}
                />
                {errors.email && <Alert>{errors.email.message}</Alert>}

                <label htmlFor="telefone" />
                <input
                    type="tel"
                    name="telefone"
                    id="telefone"
                    autoComplete='off'
                    placeholder="Telefone *"
                    className={`campo ${errors.telefone ? "campo-obrigatorio" : "campo preenchido"
                        } ${touchedFields.telefone && !errors.telefone
                            ? "campo-preenchido"
                            : ""
                        }`}
                    {...register("telefone", {
                        required: "* Campo obrigatório",
                    })}
                />
                {errors.telefone && <Alert>{errors.telefone.message}</Alert>}

                <label htmlFor="mensagem" />
                <textarea
                    cols="30"
                    rows="5"
                    placeholder="Mensagem *"
                    className={`campo ${errors.mensagem ? "campo-obrigatorio" : "campo preenchido"
                        } ${touchedFields.mensagem && !errors.mensagem
                            ? "campo-preenchido"
                            : ""
                        }`}
                    {...register("mensagem", {
                        required: "* Campo obrigatório",
                    })}
                />
                {errors.mensagem && <Alert>{errors.mensagem.message}</Alert>}

                <button type="submit" className="enviar">
                    Enviar
                </button>
            </form>
        </main>

    );


}

const Alert = styled.p`
        color: red;
        `

export default Form