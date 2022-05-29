import * as yup from "yup";

const login = yup.object({
    user: yup.object().optional(),
    params: yup.object().optional(),
    body: yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    }),
});

export default login;
