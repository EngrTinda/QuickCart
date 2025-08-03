import { serve } from 'inngest/next';
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from '../../../ingest/client';

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdate,
        syncUserDeletion
    ],
});