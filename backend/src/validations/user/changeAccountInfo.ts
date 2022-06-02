import * as yup from "yup";

const changeUserAccountInformation = yup.object({
    user: yup.object({
        id: yup.number().required(),
    }),
    params: yup.object().optional(),
    body: yup.object({
        email: yup.string().email().required(),
        name: yup.string().required(),
    }),
});

export default changeUserAccountInformation;
