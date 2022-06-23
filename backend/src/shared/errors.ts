const errors = {
  yupValidationError:
    "Something went wrong with the validations for your request.",
  emailInUse: "This email already belongs to a user.",
  invalidCredentials: "Invalid credentials",
  couldNotCreateUser: "Couldn't create a user",
  couldNotFindUserByEmail: "Could not find a user with the given email",
  requestWithoutToken: "Request without token.",
  invalidToken: "Request contained a invalid token",
  couldNotDeleteAccount:
    "Something went wrong when we tried to delete your account. Please, contact our customer support for details.",
  couldNotUpdateEmail:
    "Something went wrong when we tried to update your email. Please, contact our costumer support for details.",
  couldNotUpdateName:
    "Something went wrong when we tried to update your name. Please, contact our costumer support for details.",
  couldNotCreateTask:
    "Something went wrong when we tried to create your task. Please, contact our costumer support for details.",
  genericError: "Something went wrong in our servers :(",
  couldNotFindTask: "Could not find a task with the given data",
  couldNotFindProject: "Could not find a project with the given data",
};

export default errors;
