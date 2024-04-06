import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "john.doe@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const users = require("../../../data/users.json"); // Adjust the path as needed
        const user = users.find(user => user.email === credentials.email && user.password === credentials.password); // This is insecure; use for demonstration only
        if (user) {
          return { id: user.id, name: user.name, email: user.email }
        } else {
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',  // a custom sign-in page
    error: '/auth/error' // Error code passed in query string as ?error=
  }
});
