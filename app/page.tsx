"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import { authOptions } from './api/auth/[...nextauth]/route'

export default function Home() {

  const {data,status} = useSession()
  return (
    <main className='p-2'>
      <h1>{status}</h1>
      <h1>{JSON.stringify(data)}</h1>
      <Image 
      src={data?.user?.image || ""}
      alt=""
      height={100}
      width={100}
      />
    </main>
  )
}
