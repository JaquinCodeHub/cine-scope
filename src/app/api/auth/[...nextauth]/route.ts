import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" }, // opcional, por defecto funciona con jwt
  callbacks: {
    // opcional: mapear perfil, tokens, etc.
    async session({ session, token }) {
      // puedes añadir data al session.user si quieres
      return session;
    },
  },
});

// NextAuth v5 (beta) devuelve un objeto con handlers (GET, POST, ...).
// Exportar las propiedades concretas para que Next.js las llame como funciones.
// Evitar errores de tipos exportando funciones que delegan en el handler.
const _nextAuthHandler: any = handler;

export async function GET(request: Request) {
  return _nextAuthHandler.GET?.(request) ?? _nextAuthHandler(request);
}

export async function POST(request: Request) {
  return _nextAuthHandler.POST?.(request) ?? _nextAuthHandler(request);
}
