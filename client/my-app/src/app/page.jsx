import LoginForm from "../components/loginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default async function Home() {

  //After login,user can not go home(login) page
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <main>
    <LoginForm />
  </main>
  
}
