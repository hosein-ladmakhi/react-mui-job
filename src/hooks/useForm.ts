import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useRHF, FieldValues } from "react-hook-form";
import zod from "zod";

export const useForm = <T extends FieldValues>(schema: zod.ZodObject<any> = zod.object({})) => {
  return useRHF<T>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
    defaultValue: {},
    ...(typeof schema !== typeof undefined ? { resolver: zodResolver(schema!) } : {}),
  } as any);
};
