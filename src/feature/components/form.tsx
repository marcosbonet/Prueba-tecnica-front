import { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { CandidateType } from '../models/candidates.types';
import { useCandidate } from '../hooks/useCandidate';

export function App() {
    const initialState: CandidateType = {
        id: '',
        name: '',
        surname: '',
        phone: 0,
        email: '',
        cv: '',
    };
    const [data, setdata] = useState(initialState);

    const { handleCreate } = useCandidate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data: any) => {
        const formData = new FormData();
        formData.append('file', data.file[0]);
    };

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setdata({ ...data, [element.name]: element.value });
    };

    const handlesubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();

        handleCreate(data);
    };
    return (
        <>
            <div>
                <h2>Añadir candidato</h2>
                <form onSubmit={handlesubmit}>
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre candidato"
                            value={data.name}
                            onInput={handleInput}
                        />
                    </div>

                    <div>
                        <input
                            name="surname"
                            type="text"
                            placeholder="Apellido candidato"
                            value={data.surname}
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <input
                            name="phone"
                            type="text"
                            placeholder="Telefono candidato"
                            value={data.phone}
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <input
                            name="email"
                            type="text"
                            placeholder="Mail candidato"
                            value={data.email}
                            onInput={handleInput}
                        />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="file"
                                {...register('file')}
                                placeholder="Cv candidato"
                            />
                            <input type="submit" />
                        </form>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}
