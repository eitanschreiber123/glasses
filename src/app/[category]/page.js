'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const d=[{n:'Emporio Armani',i:'armani',l:2},{n:'Kenneth cole',i:'kenneth',l:1},{n:'Joe',i:'joe',l:3},{n:'Snowberry',i:'snowberry',l:8},{n:'Polaroid',i:'polaroid',l:9},{n:'Converse',i:'converse',l:9},{n:'Gap',i:'gap',l:4},{n:'Gant',i:'gant',l:4},{n:'Ray ban',i:'ray',l:4},{n:'Skechers',i:'skechers',l:5},{n:'Boss',i:'boss',l:8},{n:'Pepe jeans',i:'pepe',l:37},{n:'Timberland',i:'timberland',l:5},{n:'Banana republic',i:'banana',l:2},{n:'CK',i:'ck',l:3},{n:'Lacoste',i:'lacoste',l:8},{n:'Nike',i:'nike',l:10},{n:'Guess',i:'guess',l:20},{n:'Prada',i:'prada',l:4},{n:'Nautica',i:'nautica',l:3},{n:'Oakley',i:'oakley',l:2},{n:'OP',i:'op',l:8},{n:'Hombres',i:'hombre',l:36},{n:'Mujeres',i:'mujer',l:110},{n:'Niños',i:'nino',l:10},{n:'Titanium',i:'titanium',l:40},{n:'Acetato',i:'acetato',l:10},{n:'Metal',i:'metal',l:40}]

export default function Home({params}) {
  const router = useRouter()
  const c = d.filter(d => d.i == params.category)[0]
  return (
    <main className={styles.main}>
      <header style={{width:`100%`,display:'flex',flexDirection:'column',alignItems:`center`}}>
        <div style={{display:`flex`,width:`95%`,justifyContent:`space-between`}}>
          <div style={{display:`flex`}}>
            <svg onClick={() => router.back()} fill="#8f4ff8" viewBox="0 0 28 25" width="30px" height="30px"><path d="M 10 4.9296875 L 2.9296875 12 L 10 19.070312 L 11.5 17.570312 L 6.9296875 13 L 21 13 L 21 11 L 6.9296875 11 L 11.5 6.4296875 L 10 4.9296875 z" fill="#8f4ff8"></path></svg>
            <Image src="/logo.jpeg"height="200"width="200"/>
            <h2>Optical Express</h2>
          </div>
          <div style={{display:`flex`}}>
            <svg fill="#8f4ff8" viewBox="0 0 25 25" width="28" height="28" style={{marginRight:`10px`}}><path fill="#8f4ff8" d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"></path></svg>
            <svg width="22"height="22"viewBox="0 0 44 44"><defs></defs><g stroke="none"strokeWidth="1"fill="none"fillRule="evenodd"transform="translate(-435.000000, -34.000000)"><g id="icons8-search_filled" transform="translate(435.000000, 34.000000)" fill="#8f4ff8" fillRule="nonzero"><path d="M17,0 C7.601563,0 0,7.601563 0,17 C0,26.398438 7.601563,34 17,34 C20.355469,34 23.460938,33.015625 26.09375,31.34375 L38.375,43.625 L42.625,39.375 L30.5,27.28125 C32.679688,24.421875 34,20.878906 34,17 C34,7.601563 26.398438,0 17,0 Z M17,4 C24.199219,4 30,9.800781 30,17 C30,24.199219 24.199219,30 17,30 C9.800781,30 4,24.199219 4,17 C4,9.800781 9.800781,4 17,4 Z"></path></g></g></svg>
          </div>
        </div>
        <h1>{c.n}</h1>
        <p>{c.l} items</p>
      </header>
      <section style={{display:`grid`,gridTemplateColumns:`repeat(auto-fit,319px)`,width:`100%`,gridGap:`20px`,justifyContent:`center`,justifyItems:`center`}}>
      {Array.from({length:c.l}, (_, v) => v).map((i, ind) => <Link href={`/${c.i}/${ind+1}`} style={{display:`flex`,flexDirection:`column`,width:'319px',border:'1px solid rgb(226, 223, 218)',boxShadow:'rgba(125, 125, 125, 0.2) 0px 0px 5px',borderRadius:`10px`,margin:`10px`,alignItems:`center`}}>
        <Image src={`/${c.i}/${ind+1}_.png`}height="321"width="319" style={{borderTopLeftRadius:`10px`,borderTopRightRadius:`10px`}}/>
        <h2>{c.n} {ind+1}</h2>
        <p>26$</p>
        </Link>)}
      </section>
      <section style={{display:'flex',flexDirection:'column',width:`100%`,alignItems:`flex-start`}}>
        <hr />
        <h1>CONTÁCTENOS</h1>
        <h2>Teléfono</h2>
        <p style={{textDecoration:`underline`}}>+593969607475</p>
        <h2>Dirección</h2>
        <p style={{textDecoration:`underline`}}>opticalexpress1991@outlook.com</p>
      </section>
    </main>
  )
}
