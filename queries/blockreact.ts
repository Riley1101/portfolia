import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { useRouter, NextRouter } from 'next/router';
import { useQueryClient } from 'react-query';
const useBlockMutation = () => {
    let client = useQueryClient();
    const router = useRouter() as NextRouter
    interface Props {
        block: number | string
    }
    let postBlock = (data: Props) => {
        return axios.post(`/api/block/${router.query.slug}`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    return useMutation((data: Props) => postBlock(data), {
        onSuccess: () => {
            client.invalidateQueries(['block', router.query.slug])
        },
        onError: () => {
            client.invalidateQueries(['block', router.query.slug])
        }
    }
    );
}


const useBlockQuery = () => {
    const router = useRouter() as NextRouter
    let fetchBlock = async () => {
        return await axios.get(`/api/block/${router.query.slug}`)
    }
    return useQuery(['block', router.query.slug], fetchBlock,)
}

export { useBlockMutation, useBlockQuery };

