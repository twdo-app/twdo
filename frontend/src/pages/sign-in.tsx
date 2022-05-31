import Title from "../components/common/Title";
import TextInput from "../components/common/TextInput";
import AuthLayout from "../components/layouts/AuthLayout";
import Button from "../components/common/Button";
import Hyperlink from "../components/common/Hyperlink";

export default function SignIn() {
  return (
    <AuthLayout>
      <Title className="mb-8">login</Title>

      <TextInput className="mb-4" placeholder="email address" />
      <TextInput className="mb-4" placeholder="password" type="password" />

      <Button className="w-full mb-8">login</Button>

      <p>
        no account? <Hyperlink to="/sign-up">create one</Hyperlink>
      </p>
    </AuthLayout>
  );
}
