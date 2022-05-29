import * as yup from "yup";

const deleteAccount = yup.object({
    user: yup.object({
        id: yup.number().required(),
    }),
    params: yup.object().optional(),
    body: yup.object().optional(),
});

export default deleteAccount;
