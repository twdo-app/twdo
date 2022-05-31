import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";

export default function SignUp() {
  return (
    <AuthLayout>
      <Title className="mb-8">sign up</Title>

      <TextInput className="mb-4" placeholder="name" />
      <TextInput className="mb-4" placeholder="email address" />
      <TextInput className="mb-4" placeholder="password" type="password" />
      <TextInput
        className="mb-4"
        placeholder="confirm your password"
        type="password"
      />

      <Button className="w-full mb-8">sign up</Button>

      <p>
        already have an account? <Hyperlink to="/sign-in">sign in</Hyperlink>
      </p>
    </AuthLayout>
  );
}
