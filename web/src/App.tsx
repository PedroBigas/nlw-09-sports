import './input.css'


import logoIMg from './assets/Logo.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdPortal } from './components/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads: number;
  }
}

function App() {

  const [games, setGames ] = useState<Game[]>([])
  
  useEffect(() => {
    fetch('http://localhost:3000/games')
    .then(response => response.json())
      .then(data => {
        setGames(data)
        
      })
  }, [])

    return( 
      <div className='max-w-[1344px] mx-auto flex flex-col items-center my-12'>
            <img src={logoIMg} alt="logo nlw eSports"/>
            <h1 className='text-6xl text-white font-black mt-14' >
              Seu 
                <span className='text-transparent bg-nlw-gradient bg-clip-text '> duo </span> 
              está aqui.
            </h1>

          <div className='grid grid-cols-6 gap-6 mt-16'>
              {games.map(game => {
                  return(
                    <GameBanner 
                    key={game.id}
                    bannerUrl={game.bannerUrl} 
                    title={game.title} 
                    adsCount={game._count.ads} 
                    />
                  )
                })
              }
          </div>    
            <Dialog.Root>
            
             <CreateAdBanner />

              <CreateAdPortal />

            </Dialog.Root>

        </div>
      )
}

export default App
