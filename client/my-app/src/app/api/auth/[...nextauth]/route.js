
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; 

const authOption = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},

            async authorize(credentials){
                const user = { id: "1"};
                return user;
            },    
        })
    ],
    Session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOption);

export {handler as GET, handler as POST};