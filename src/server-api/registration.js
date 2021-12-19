import { useHttp } from '../hooks/http.hook';
import { useAuthorization } from '../server-api/authorization';
import locale from '../locale/en'


export const useRegistration = () => {
    const { request, loading } = useHttp()
    const { authorization } = useAuthorization()

    const registration = async (form, user) => {
        try {
            await request('http://localhost:4000/api/login/registration', 'POST', { ...form }, {}, locale.translation.notification.successRegister)
            await authorization(form, user)
        } catch (error) { }
    }

    return { registration, loading }
}