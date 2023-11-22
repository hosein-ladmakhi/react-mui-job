import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
   addDataToResumeItem,
   addResumeItem,
   createResume,
   deleteResume,
   deleteResumeItemById,
   editResume,
   getResume,
   getResumes,
} from "../services/resume";
import {
   TAddNewResumeItemBody,
   TEditResumeBody,
   TResume,
   TResumes,
} from "../types/apis/resume";
import { TObject } from "../types/general";

export const useCreateResume = () => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: createResume,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useEditResume = (id: number) => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: (data: TEditResumeBody) => editResume(id, data!),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useDeleteResume = (id: number) => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: () => deleteResume(id),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useResume = () => {
   const { isLoading, isFetching, isError, data } = useQuery<TResumes>({
      queryKey: ["resumes"],
      queryFn: getResumes,
      placeholderData: [],
   });
   return { isLoading: isLoading || isFetching, isError, data };
};

export const useResumeById = (id: number) => {
   const { isLoading, isFetching, isError, data } = useQuery<TResume>({
      queryKey: ["resumes", id],
      queryFn: () => getResume(id),
      enabled: !!id,
   });
   return { isLoading: isLoading || isFetching, isError, data };
};

export const useAddResumeItem = () => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: (data: TAddNewResumeItemBody) => addResumeItem(data),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useAddDataResumeItem = () => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: addDataToResumeItem,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useDeleteResumeItem = () => {
   const queryClient = useQueryClient();
   const { isSuccess, isPending, mutateAsync } = useMutation({
      mutationFn: deleteResumeItemById,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });

   return { isSuccess, isLoading: isPending, mutateAsync };
};
