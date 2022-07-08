import { GetServerSideProps } from "next";
import { useTheme } from "next-themes";
import { parseCookies } from "nookies";
import Dropdown from "../components/common/Dropdown";
import FormLabel from "../components/common/FormLabel";
import FormSection from "../components/common/FormSection";
import Hyperlink from "../components/common/Hyperlink";
import AppLayout from "../components/layouts/AppLayout";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <AppLayout title="Settings">
      <FormSection>
        <FormLabel>Theme:</FormLabel>
        <Dropdown
          onChange={(e) => setTheme(e.target.value)}
          value={theme as string}
          id="theme"
          name="theme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </Dropdown>
      </FormSection>
      <Hyperlink href="/feedback">Send FeedBack</Hyperlink>
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["twdo.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
