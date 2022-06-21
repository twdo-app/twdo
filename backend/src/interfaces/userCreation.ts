interface IUserCreation {
  name: string;
  email: string;
  password: string;
  wasCreatedWithOAuth?: boolean;
}

export default IUserCreation;
