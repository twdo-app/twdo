import * as yup from "yup";

const changePasswordRequest = yup.object({
    user: yup.object({
        id: yup.number().required(),
    }),
    params: yup.object().optional(),
    body: yup.object({
        oldPassword: yup.string().required(),
        newPassword: yup.string().min(5).required(),
    }),
});

export default changePasswordRequest;
