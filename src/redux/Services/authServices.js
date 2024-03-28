import {clientApi} from './clientApi';

export const authService = clientApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: credentials => ({
        url: `/investor_login`,
        method: 'POST',
        body: credentials,
      }),
    }),

    registerUser: builder.mutation({
      query: body => ({
        url: `/add_Investor`,
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
        url: `/getEventtillDate`,
        method: 'GET',
      }),
    }),

    fetchForumCategory: builder.query({
      query: () => ({
        url: `/get_all_forum_Category`,
        method: 'GET',
      }),
    }),

    getDetails: builder.query({
      query: () => ({
        url: `/get_all_forum_question`,
        method: 'GET',
      }),
    }),

    // getQuestions: builder.query({
    //   query: () => ({
    //     url:`/`
    //   })
    // })

    fetchActiveMandate: builder.mutation({
      query: () => ({
        url: `/mandate/list`,
        method: 'POST',
      }),
    }),

    fetchPortfolio: builder.query({
      query: _id => ({
        url: `/portfolio/list_by_mandate?user_registered_id=${_id}`,
        method: 'GET',
      }),
    }),

    updateProfile: builder.mutation({
      query: body => ({
        url: `/update_Investor`,
        method: 'PUT',
        body: body,
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

    changePassword: builder.mutation({
      query: body => ({
        url: `/update-password/investor`,
        method: 'PUT',
        body: body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useFetchStatesQuery,
  useLazyFetchEventsQuery,
  useLazyFetchForumCategoryQuery,
  useLazyFetchReferralByIdQuery,
  useLazyFetchPortfolioQuery,
  useAddReferralsMutation,
  useLazyGetDetailsQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useFetchActiveMandateMutation,
} = authService;
