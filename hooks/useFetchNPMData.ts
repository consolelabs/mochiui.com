import useSWR from 'swr'
import { NPM_DATA_ENDPOINT } from '../constants/npm'
import { NPMDataResponse } from '../types/npm'

export const SWR_KEY_FETCH_NPM_DATA = 'SWR_KEY_FETCH_NPM_DATA'

export const useFetchNPMData = (packageName: string = '@mochi-ui/core') => {
  const { data, ...rest } = useSWR<NPMDataResponse>(
    [SWR_KEY_FETCH_NPM_DATA],
    async () => {
      const res = await fetch(NPM_DATA_ENDPOINT(packageName))
      return res.json()
    },
  )

  return {
    data: data,
    ...rest,
  }
}
