import * as yup from "yup";

const changeUserEmailRequest = yup.object({
    user: yup.object({
        id: yup.number().required(),
    }),
    params: yup.object().optional(),
    body: yup.object({
        email: yup.string().email().required(),
    }),
});

export default changeUserEmailRequest;
