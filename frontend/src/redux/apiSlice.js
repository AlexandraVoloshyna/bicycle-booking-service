import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:5002/api',
        credentials: 'include',
        
      }),
      tagTypes: ['Bikes', 'Stats'],
      endpoints: (builder) => ({
        addOne: builder.mutation({
            query: (data)=> ({
                url: `/create`,
                method: "POST",
                body: data

            }),
            invalidatesTags: ['Bikes', 'Stats'],
        }),
        update: builder.mutation({
            query: (data)=> ({

                url: `/updatestatus/${data.id}`,
                method: "PATCH",
                body: data 
            }),
            invalidatesTags: ['Stats'],

        }),
        delete: builder.mutation({
            query: (id)=> ({
                url: `/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Bikes', 'Stats'],
        }),
        getAll: builder.query({
            query: () => ({
                url: '/getall',
            }),
            providesTags: ['Bikes'], 

        }),
        getStats: builder.query({
            query: ()=> ({
                url: '/getstats',
            }),
            providesTags: ['Stats'], 
        }),
    }),  
});

export const {
    useGetAllQuery,
    useAddOneMutation,
    useGetStatsQuery,
    useDeleteMutation,
    useUpdateMutation
} = apiSlice