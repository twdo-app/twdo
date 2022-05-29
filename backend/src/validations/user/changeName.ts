import * as yup from "yup";

const changeUserNameRequest = yup.object({
    user: yup.object({
        id: yup.number().required(),
    }),
    params: yup.object().optional(),
    body: yup.object({
        name: yup.string().required(),
    }),
});

export default changeUserNameRequest;
