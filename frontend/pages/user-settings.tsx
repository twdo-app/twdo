import Router from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import Button from "../components/common/Button";
import AppLayout from "../components/layouts/AppLayout";

export default function UserSettings() {
  const signOut = () => {
    destroyCookie(null, "twdo.token");
    Router.push("/sign-in");
  };

  return (
    <AppLayout title="User Settings">
      <Button onClick={signOut}>Sign out</Button>
    </AppLayout>
  );
}
