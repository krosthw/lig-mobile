"use client";

import Image from 'next/image'
import { Book } from "@/types";

interface ListBookProps {
  data: Book[]
};

const ListBook: React.FC<ListBookProps> = ({
  data
}) => {
  return (
    <div className='h-full w-full grid grid-flow-row auto-rows-max'>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Titolo
              </th>
              <th scope="col" className="px-6 py-3">
                Autore
              </th>
              <th scope="col" className="px-6 py-3">
                Immagine
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((libro) => (
                <tr key={libro.id} className="bg-gray-800 border-gray-700 hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  {libro.titolo}
                  </th>
                  <td className="px-6 py-4">
                  {libro.autore}
                  </td>
                  <td className="px-6 py-4">
                    <Image
                    src={libro.imageUrl}
                    width={50}
                    height={50}
                    alt="Picture of the author"/>
                
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-500 hover:underline">Modifica</a>
                  </td>
                </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBook;