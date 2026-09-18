import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { LoginValidado } from '../schemas/loginSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const navigate = useNavigate();
    const [errorApi, setErrorApi] = useState<string | null>(null);

    const { login } = useAuth();
    
    const { register, handleSubmit, formState: { errors } } = useForm<LoginValidado>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (datos: LoginValidado) => {
    try {
        await login(datos);          // el token y el usuario quedan en el AuthProvider
        navigate('/catalogo');
    } catch (e) {
        setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    }
    };

    return (
        <div style={{ maxWidth: '350px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Ingresar</h2>
        
        
        {errorApi && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorApi}</p>}

        
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Email</label>
            <input 
                type="email" 
                placeholder="admin@libreria.test"
                {...register('email')} 
            />
            
            {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email.message}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Contraseña</label>
            <input 
                type="password" 
                placeholder="********"
                {...register('password')} 
            />
            
            {errors.password && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.password.message}</span>}
            </div>

            <button type="submit" style={{ padding: '10px', cursor: 'pointer'}} >
            Ingresar
            </button>
            
        </form>
        </div>  
    );

}