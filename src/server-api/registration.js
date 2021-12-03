import { useHttp } from '../hooks/http.hook';
import { useAuthorization } from '../server-api/authorization';

export const useRegistration = () => {
    const { request, loading } = useHttp()
    const { authorization } = useAuthorization()

    const registration = async (form, user) => {
        try {
            await request('http://localhost:4000/api/login/registration', 'POST', { ...form }, {}, 'Successful register!')
            await authorization(form, user)
        } catch (error) { }
    }

    return { registration, loading }
}