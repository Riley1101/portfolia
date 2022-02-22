import {
    QueryClient,
} from 'react-query'
import type { QueryClient as QueryType } from 'react-query'

const queryClient: QueryType = new QueryClient()

export default queryClient;