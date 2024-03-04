import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'oscvqyx5',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2024-04-03', 
})