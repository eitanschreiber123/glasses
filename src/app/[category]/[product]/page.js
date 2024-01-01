'use client'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../page.module.css'
import { useRouter } from 'next/navigation'

const d=[{n:'Emporio Armani',i:'armani',l:2},{n:'Kenneth cole',i:'kenneth',l:1},{n:'Joe',i:'joe',l:3},{n:'Snowberry',i:'snowberry',l:8},{n:'Polaroid',i:'polaroid',l:9},{n:'Converse',i:'converse',l:9},{n:'Gap',i:'gap',l:4},{n:'Gant',i:'gant',l:4},{n:'Ray ban',i:'ray',l:4},{n:'Skechers',i:'skechers',l:5},{n:'Boss',i:'boss',l:8},{n:'Pepe jeans',i:'pepe',l:37},{n:'Timberland',i:'timberland',l:5},{n:'Banana republic',i:'banana',l:2},{n:'CK',i:'ck',l:3},{n:'Lacoste',i:'lacoste',l:8},{n:'Nike',i:'nike',l:10},{n:'Guess',i:'guess',l:20},{n:'Prada',i:'prada',l:4},{n:'Nautica',i:'nautica',l:3},{n:'Oakley',i:'oakley',l:2},{n:'OP',i:'op',l:8},{n:'Hombres',i:'hombre',l:36},{n:'Mujeres',i:'mujer',l:110},{n:'Niños',i:'nino',l:10},{n:'Titanium',i:'titanium',l:40},{n:'Acetato',i:'acetato',l:10},{n:'Metal',i:'metal',l:40}]

export default function Home({params}) {
  const router = useRouter()
  const c = d.filter(d => d.i == params.category)[0]
  return (
    <main className={styles.main}>
      <Head>
        <meta name="google" content="notranslate"/>
      </Head>
    <header style={{display:`flex`,width:`95%`,justifyContent:`space-between`}}>
      <div style={{display:`flex`}}>
        <svg onClick={() => router.back()} fill="#8f4ff8" viewBox="0 0 28 25" width="30px" height="30px"><path d="M 10 4.9296875 L 2.9296875 12 L 10 19.070312 L 11.5 17.570312 L 6.9296875 13 L 21 13 L 21 11 L 6.9296875 11 L 11.5 6.4296875 L 10 4.9296875 z" fill="#8f4ff8"></path></svg>
        <Image src="/logo.jpeg"height="200"width="200"/>
        <h2>Optical Express</h2>
      </div>
      <svg fill="#8f4ff8" viewBox="0 0 25 25" width="28" height="28"><path fill="#8f4ff8" d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"></path></svg>
    </header>
      <section style={{display:`flex`,width:`100%`,marginRight:`50px`}}>
        <Image src={`/${params.category}/${params.product}_.png`}style={{height:`auto`,width:`50vw`,marginRight:`50px`}}/>
        <div>
          <h2>{c.n} {params.product}</h2>
          <p>26$</p>
          <Link target="_blank" href={`https://wa.me/593969607475?text=me%20interesa%20${c.n}%20${params.product}%20`}>Contacto</Link>
        </div>
      </section>
      <section>
        <h2>Mas productos</h2>
        <div style={{display:`flex`,overflowX:`scroll`,width:`100vw`}}>
          {Array.from({length:c.l - 1}, (_, v) => v).map((i, ind) => ind+1 !==params.product ? <div style={{display:`flex`,flexDirection:`column`,width:'319px',border:'1px solid rgb(226, 223, 218)',boxShadow:'rgba(125, 125, 125, 0.2) 0px 0px 5px',borderRadius:`10px`,margin:`10px`,alignItems:`center`}}>
            <Image src={`/${params.category}/${ind+1}_.png`}height="321"width="319" style={{borderTopLeftRadius:`10px`,borderTopRightRadius:`10px`}}/>
            <h2>{c.n} {ind+1}</h2>
            <p>26$</p>
            </div> : null)}
        </div>
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
