import { Link } from "react-router-dom";

import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";

export default function SignIn() {
  return (
    <AuthLayout>
      <Title className="mb-8">login</Title>

      <TextInput className="mb-4" placeholder="email address"></TextInput>
      <TextInput
        className="mb-4"
        placeholder="password"
        type="password"
      ></TextInput>

      <Button className="w-full mb-8">login</Button>

      <p>
        <Link to="/sign-in">forget your password?</Link>
      </p>
      <p>
        no account? <Link to="/sign-up">create one</Link>
      </p>
    </AuthLayout>
  );
}
