import _ from 'lodash';

import Request from '@/lib/request/Request.ts';
import example from '@/api/controllers/example.ts';

export default {

    prefix: '/example',

    get: {

        '/test': async (request: Request) => {
            return example.test();
        }

    }

}