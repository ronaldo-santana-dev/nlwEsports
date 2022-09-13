import './styles/main.css';

import { MagnifyingGlassPlus } from 'phosphor-react'

import logo from './assets/Logo.svg'

import lol from './assets/lol.png'
import cs from './assets/cs.png'
import dota from './assets/dota.png'
import fortnite from './assets/fortnite.png'
import apex from './assets/apex.png'
import wow from './assets/wow.png'

export const App = () => {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" />
      
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-gradient-to-r from-[#72A2FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text'>duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src={lol}/>
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 block mt-20'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
        </a>

        <a href="#" className='relative'>
          <img src={cs}/>

          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r  from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 mt-20 block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
          
        </a>

        <a href="#" className='relative'>
          <img src={dota}/>
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 mt-20 block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
        </a>

        <a href="#" className='relative'>
          <img src={fortnite}/>
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 mt-20 block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
        </a>

        <a href="#" className='relative'>
          <img src={apex}/>
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 mt-20 block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
        </a>

        <a href="#" className='relative'>
          <img src={wow}/>
          <div className="w-full pt-16 pb-4 px-4 bg-gradient-to-r from-black absolute rounded-lg bottom-0 left-0 right-0 top-0">
            <strong className='font-bold text-slate-50 mt-20 block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 Anúncios</span>
          </div>
        </a>

      </div>

      <div className='text-transparent bg-gradient-to-r from-[#72A2FC] via-[#43E7AD] to-[#E1D55D] pt-1 self-stretch mt-8 rounded-lg'></div>
      <div className='bg-[#2a2634] px-8 py-6 self-stretch rounded-lg flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='mt-2 text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4  bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-2'>
          <MagnifyingGlassPlus />
            Publicar anúncio
            
          </button>
      </div>
    </div>
    
  )
}

