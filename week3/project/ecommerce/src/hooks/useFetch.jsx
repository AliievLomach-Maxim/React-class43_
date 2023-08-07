import { useState, useCallback } from 'react'

const useFetch = () => {
	const [data, setData] = useState(null)
	const [response, setResponse] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchData = useCallback(async (url, options = {}) => {
		try {
			setLoading(true)
			setError('')
			const response = await fetch(
				`https://fakestoreapi.com/${url}`,
				options
			)
			const responseData = await response.json()
			setData(responseData)
			setLoading(false)
			return responseData
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}, [])

	const fetchMultiple = useCallback(
		async (urls, options = {}) => {
			try {
				setLoading(true)
				setError('')
				const promises = urls.map((url) => fetchData(url, options))
				const responses = await Promise.all(promises)
				console.log('responses :>> ', responses)
				setResponse(responses)
			} catch (error) {
				setError(error.message)
			} finally {
				setLoading(false)
			}
		},
		[fetchData]
	)
	return { data, response, loading, error, fetchData, fetchMultiple }
}

export default useFetch
