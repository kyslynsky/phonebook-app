import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;

      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    signupUser: build.mutation({
      query: credentials => ({
        url: '/signup',
        method: 'POST',
        body: { ...credentials },
      }),
      providesTags: ['User'],
    }),
    login: build.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials },
      }),
      providesTags: ['User'],
    }),
    getCurrentUser: build.query({
      query: () => '/current',
      method: 'GET',
    }),
    logout: build.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLogoutMutation,
} = authApi;
