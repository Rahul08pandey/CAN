import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: `/login`,
        method: 'POST',
        body: credentials,
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
      query: () => ({
        url: `/get_Events`,
        method: 'GET',
      }),
    }),

    fetchForumCategory: builder.query({
      query: () => ({
        url: `/get_all_forum_Category`,
        method: 'GET',
      }),
    }),

    fetchReferralById: builder.query({
      query: _id => ({
        url: `/referral/list_by_mandate?user_mandate=${_id}`,
        method: 'GET',
      }),
    }),

    addReferrals: builder.mutation({
      query: body => ({
        url: `/add/referral`,
        method: 'POST',
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
  useFetchForumCategoryQuery,
  useLazyFetchReferralByIdQuery,
  useLazyFetchPortfolioQuery,
  useAddReferralsMutation,
} = authService;
