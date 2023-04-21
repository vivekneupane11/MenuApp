
import SearchBar from '@/components/SearchBar'
import Cards from '@/components/Cards'


export default async function Home({searchParams:{q}}) {
  
  const query = q ? q : 'apple';
  const {menuItems} = await(await fetch(`https://api.spoonacular.com/food/menuItems/search?apiKey=c3a1b5d759bf4c9abec93b6c767149e0&query=${query}&number=12`)).json()
 
 
  
  return (
    <main className="flex flex-col justify-center items-center">
      <SearchBar/>
      <h1 className='mt-10 text-2xl text-center  md:text-4xl' >Here's the list of items for <b className='text-yellow-300 capitalize'>{query}</b></h1>
     <section className='flex justify-center m-6 items-center flex-wrap w-[90%]'>
      {
        !menuItems.length && <h1 className='mt-10' >No data found  on {q}. Trying searching something else</h1>
      }
   
      {
     (!!menuItems.length) &&   menuItems.map((e,i)=><Cards key={i} title={e.title} image={e.image} />)
      }
     </section>
      </main>
  )
}
