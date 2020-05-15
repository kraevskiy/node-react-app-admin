import {useCallback, useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {AuthContext} from "../contex/auth/authContext"

export default url => {
  const {token} = useContext(AuthContext)
  console.log(token);
  const baseUrl = '/api'
  const fetchAxios = axios.create({
    headers: {
      Authorization: token
    }
  })
  const [loading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    let skipGetResponseAfterDestroy = false

    const requestOptions = {
      ...options,
    }

    if (!loading) return

    fetchAxios(`${baseUrl}${url}`, requestOptions)
      .then(res => {
        setTimeout(function () {
          if (!skipGetResponseAfterDestroy) {
            setIsLoading(false)
            setResponse(res.data)
          }
        }, 3000)
      })
      .catch(error => {
        setTimeout(function () {
          if (!skipGetResponseAfterDestroy) {
            setIsLoading(false)
            setError(error.response.data)
          }
        }, 3000)
      })
    return () => {
      skipGetResponseAfterDestroy = true
    }
  }, [loading, options, url])

  return [{loading, response, error}, doFetch]
}

