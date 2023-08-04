import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '664fbafb53msh420081818635086p1bfafajsn7b1eb344f8fd',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', cryptoApiHeaders['X-RapidAPI-Key']);
      headers.set('X-RapidAPI-Host', cryptoApiHeaders['X-RapidAPI-Host']);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `/coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

