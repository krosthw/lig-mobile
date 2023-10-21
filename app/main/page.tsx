import ListBook from '@/components/listbook';
import NavBar from '@/components/navbar';
import Container from '@/components/ui/container';
import { Book } from '@/types';
import Image from 'next/image'
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Main() {
  const books: Book[] = [
    { id: "a1", titolo: "Libri1", autore: "Libri1", imageUrl: "https://picsum.photos/200/300" },
    { id: "a2", titolo: "Libri2", autore: "Libri2", imageUrl: "https://picsum.photos/200/300" },
    { id: "a3", titolo: "Libri3", autore: "Libri3", imageUrl: "https://picsum.photos/200/300" },
    { id: "a4", titolo: "Libri4", autore: "Libri4", imageUrl: "https://picsum.photos/200/300" },
    { id: "a5", titolo: "Libri5", autore: "Libri5", imageUrl: "https://picsum.photos/200/300" },
    { id: "a6", titolo: "Libri6", autore: "Libri6", imageUrl: "https://picsum.photos/200/300" },
    { id: "a7", titolo: "Libri7", autore: "Libri7", imageUrl: "https://picsum.photos/200/300" },
    { id: "a8", titolo: "Libri8", autore: "Libri8", imageUrl: "https://picsum.photos/200/300" },
    { id: "a9", titolo: "Libri9", autore: "Libri9", imageUrl: "https://picsum.photos/200/300" },
    { id: "a10", titolo: "Libri10", autore: "Libri10", imageUrl: "https://picsum.photos/200/300" },
    { id: "a11", titolo: "Libri11", autore: "Libri11", imageUrl: "https://picsum.photos/200/300" },
    { id: "a12", titolo: "Libri12", autore: "Libri12", imageUrl: "https://picsum.photos/200/300" },
  ];

  return (
    <Container>
      <div className='h-full w-full grid grid-flow-row auto-rows-max'>
        <div className='m-2'>
          <NavBar />
        </div>
        <div className='m-2'>
          <ListBook data={books} />
        </div>
      </div>
    </Container>
  )
}
