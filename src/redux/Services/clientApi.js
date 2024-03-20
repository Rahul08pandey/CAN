import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://54.190.192.105:9185/angel';

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, {getState, endpoints}) => {
      const token = getState().auth.user.Token;
      // console.log(token, '.>>>>>token');

      if (token) {
        headers.set('Authorization', token);
        headers.set('Content-Type', 'application/json');
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({}),
});
