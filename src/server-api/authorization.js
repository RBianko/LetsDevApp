import { useHttp } from '../hooks/http.hook';

export const useAuthorization = () => {
    const { request, loading } = useHttp()

    const authorization = async (form, user) => {
        try {
            const data = await request('http://localhost:4000/api/login/authorization', 'POST', { ...form })
            user.login(data.token, data._id)
        } catch (error) { }
    }

    return { authorization, loading }
}