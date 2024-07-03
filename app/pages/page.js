import { items } from '../mockData/page'
import Image from 'next/image'

export default async function HomePage() {
  const fetchItems = async () => {
    return items
  }

  const data = await fetchItems()
  

  return (
    <main className="bg-white-background min-h-screen flex flex-col justify-center items-center">
      <ul className="w-3/4 md:w-5/6 flex flex-wrap mt-8">
        {data.map((item) => (
          <li key={item.id} className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <article className="bg-white rounded-xl p-4 h-96 flex flex-col items-center shadow-lg">
              {item.image && (
                <Image
                  className="mt-5 mb-8"
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                />
              )}
              <div className="border-t w-full flex justify-center mb-3">
                <h2 className="text-lg font-bold mt-3 text-custom-purple">
                  {item.name}
                </h2>
              </div>
              <div className="w-5/7 flex justify-center mb-10">
                <p className="text-sm ">{item.description}</p>
              </div>
              <div className="flex flex-row justify-evenly md:justify-between w-full">
                <div className="flex">
                  <p className="font-bold">${item.price}</p>
                  {item.oldPrice && (
                    <p className="line-through font-bold text-xs hidden sm:block">
                      ${item.oldPrice}
                    </p>
                  )}
                </div>
                <button className="bg-purple-button text-white text-xs px-4 rounded hover:bg-purple-button">
                  add to cart
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
