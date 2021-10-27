import { useHttp } from '../hooks/http.hook';

export const useAuthorization = () => {
    const { request, loading } = useHttp()

    const authorization = async (form, user) => {
        try {
            const data = await request('/api/login/authorization', 'POST', { ...form })
            user.login(data.token, data.userId)
        } catch (error) { }
    }

    return { authorization, loading }
}