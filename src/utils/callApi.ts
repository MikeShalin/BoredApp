import axios from 'axios'

interface Args {
  url: string;
  config: {};
  onRequest: Function;
  onSuccess: (value: any) => any;
  onError: Function;
}

export const callApi = ({
                          url,
                          config,
                          onRequest,
                          onSuccess,
                          onError,
                        }: Args) => {
  onRequest()
  const Headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET',
    },
  }
  return getResult(url, { ...config, Headers })
    .then((json: {}) => onSuccess(json))
    .catch((error: Error) => onError(error.toString()))
}

export const getResult = (url: string, config: {}) => (
  // @ts-ignore
  axios.get(url, Object.assign({}, { crossDomain: true }, config ))
)