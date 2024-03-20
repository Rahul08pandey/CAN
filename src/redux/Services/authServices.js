import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: body => ({
        url: `/login`,
        method: 'POST',
        body: body,
      }),
    }),

    registerUser: builder.mutation({
      query: body => ({
        url: `/register`,
        method: 'POST',
        body: body,
      }),
    }),

    fetchStates: builder.query({
      query: () => ({
        url: `/get_all_state`,
        method: 'GET',
      }),
    }),

    fetchEvents: builder.query({
      query: body => ({
        url: `/get_Events`,
        method: 'GET',
        body: body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useFetchStatesQuery,
  useFetchEventsQuery,
} = authService;
