"use client"

import Container from '@/components/ui/container';
import Image from 'next/image'
import React from 'react';

import { useRouter } from 'next/navigation'

export default function Home() {
  let router = useRouter();
  const routeChange = () => router.push('/main');
  const routeOrderChange = () => router.push('/order');
  return (
    <Container>
      <div className="grid grid-rows-2 gap-1">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={routeChange}>
          Organize
        </button>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={routeOrderChange}>
          View Order
        </button>
      </div>
    </Container>
  )
}
