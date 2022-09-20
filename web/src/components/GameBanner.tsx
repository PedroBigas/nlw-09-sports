
interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}


export default function GameBanner(props: GameBannerProps){
    return(
        

              <a href="" className='relative rounded-lg overflow-hidden'>
                <img src={props.bannerUrl} alt="img game" />

                <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
                  <strong className='text font-bold text-white block'>
                    {props.title}
                    </strong>
                  <span className='text-zinc-300 text-sm block'>{props.adsCount} Anuncio(s)</span>
                </div>
              </a>

        


       
    )
}