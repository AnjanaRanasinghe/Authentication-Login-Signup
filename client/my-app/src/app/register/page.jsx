import RegisterForm from "../../components/registerForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {

    //when login user can not go register page
    const session = await getServerSession(authOptions);
    if(session) redirect("/dashboard");   
    
    return <RegisterForm />;
}