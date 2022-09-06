import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
  }),
  prepareHeaders: (headers, { getState }) => {
    const { token = '' } = getState().user;
    if (token) {
      headers.set('Authorization', token);
    }

    return headers;
  },
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
  }),
});

export const { useSignupUserMutation } = authApi;
