import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import prisma from '@/prisma';

export const authOptions:NextAuthOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:"786619820309-dei3sg1mrcm7kce6p8spnne4ushntlhp.apps.googleusercontent.com",
            clientSecret:"s4RNiS0D0RQs-7xFLRZxGVYJ"
        })
    ],
    secret:"Some special secret"
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}