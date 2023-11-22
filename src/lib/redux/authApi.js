import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { logout } from "./userSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookrecommendation-t6qc.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getCurrentUser.initiate(null));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(logout());
        } catch (error) {}
      },
    }),
    registerUser: builder.mutation({
      query: (payload) => ({
        url: "/auth/register",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
