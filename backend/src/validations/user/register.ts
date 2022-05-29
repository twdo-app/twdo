import * as yup from "yup";

const register = yup.object({
    user: yup.object().optional(),
    params: yup.object().optional(),
    body: yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(5).required(),
    }),
});

export default register;
