import express from "express";
import UserController from "../controllers/UserController";
import UserAuth from "../middlewares/UserAuth";

import yupValidator from "../validations/yupValidator";
import register from "../validations/user/register";
import login from "../validations/user/login";
import changeUserAccountInformation from "../validations/user/changeAccountInfo";
import deleteAccount from "../validations/user/deleteAccount";
import changePasswordRequest from "../validations/user/changePassword";
import changeUserNameRequest from "../validations/user/changeName";

const router = express.Router();

/**
 * All user routes have the base url:
 * 127.0.0.1/users
 */

/**
 * Creating a new user (registration page)
 * POST /
 * /users/register
 */
router.post("/register", yupValidator(register), UserController.register());

/**
 * Login
 * POST /
 * /users/signin
 */
router.post("/signIn", yupValidator(login), UserController.signIn());

/**
 * Account deletion
 *
 * DELETE
 * /users/delete
 */
router.delete(
    "/delete",
    UserAuth.verifyJWT(),
    yupValidator(deleteAccount),
    UserController.delete()
);

/**
 * Change account information.
 *
 * PATCH
 */

router.patch(
    "/change-info",
    UserAuth.verifyJWT(),
    yupValidator(changeUserAccountInformation),
    UserController.changeEmail()
);

/**
 * Change account password
 *
 * PATCH
 */

router.patch(
    "/change-password",
    UserAuth.verifyJWT(),
    yupValidator(changePasswordRequest),
    UserController.changePassword()
);

/**
 * Get logged user information
 *
 * GET
 */

router.get("/me", UserAuth.verifyJWT(), UserController.getLoggedUser());

export default router;
