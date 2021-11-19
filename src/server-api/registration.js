import { useHttp } from '../hooks/http.hook';

export const useRegistration = () => {
    const { request, loading } = useHttp()

    const registration = async (form) => {
        try {
            await request('http://localhost:4000/api/login/registration', 'POST', { ...form })
        } catch (error) { }
    }

    return { registration, loading }
}