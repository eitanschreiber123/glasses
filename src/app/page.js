import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const c=[{n:'Emporio Armani',i:'armani',l:2},{n:'Kenneth cole',i:'kenneth',l:1},{n:'Joe',i:'joe',l:3},{n:'Snowberry',i:'snowberry',l:8},{n:'Polaroid',i:'polaroid',l:9},{n:'Converse',i:'converse',l:9},{n:'Gap',i:'gap',l:4},{n:'Gant',i:'gant',l:4},{n:'Ray ban',i:'ray',l:4},{n:'Skechers',i:'skechers',l:5},{n:'Boss',i:'boss',l:8},{n:'Pepe jeans',i:'pepe',l:37},{n:'Timberland',i:'timberland',l:5},{n:'Banana republic',i:'banana',l:2},{n:'CK',i:'ck',l:3},{n:'Lacoste',i:'lacoste',l:8},{n:'Nike',i:'nike',l:10},{n:'Guess',i:'guess',l:20},{n:'Prada',i:'prada',l:4},{n:'Nautica',i:'nautica',l:3},{n:'Oakley',i:'oakley',l:2},{n:'OP',i:'op',l:8},{n:'Hombres',i:'hombre',l:36},{n:'Mujeres',i:'mujer',l:110},{n:'Niños',i:'nino',l:10},{n:'Titanium',i:'titanium',l:40},{n:'Acetato',i:'acetato',l:10},{n:'Metal',i:'metal',l:40}]

export default function Home() {
  return (
    <main className={styles.main}>
      <header style={{display:'flex',flexDirection:'column',alignItems:`center`}}>
        <Image src="/logo.jpeg"height="200"width="200"/>
        <h1>Optical Express</h1>
        <p>28 catálogos</p>
        <div style={{border:'1px solid rgb(226, 223, 218)',backgroundColor:'rgb(255, 255, 255)',borderRadius:'50px',boxShadow:'0 2px 4px 0 hsla(0,0%,40%,.1)',margin:'14px 20px',padding:'0px 12px',position:'inherit',width:'calc(100vw - 100px)',alignItems:`center`,display:`flex`,height:'55px'}}>
          <input type="search"placeholder="Busca productos"style={{paddingLeft:'10px',alignSelf:'stretch',backgroundColor:'initial',border:'none',boxShadow:'none',color:'#181d22',flex:1,fontSize:'16px',outline:0,width:'100%'}} />
          <svg width="16" height="16" viewBox="0 0 44 44">
            <defs></defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-435.000000, -34.000000)">
            <g id="icons8-search_filled" transform="translate(435.000000, 34.000000)" fill="#CCC" fillRule="nonzero">
            <path d="M17,0 C7.601563,0 0,7.601563 0,17 C0,26.398438 7.601563,34 17,34 C20.355469,34 23.460938,33.015625 26.09375,31.34375 L38.375,43.625 L42.625,39.375 L30.5,27.28125 C32.679688,24.421875 34,20.878906 34,17 C34,7.601563 26.398438,0 17,0 Z M17,4 C24.199219,4 30,9.800781 30,17 C30,24.199219 24.199219,30 17,30 C9.800781,30 4,24.199219 4,17 C4,9.800781 9.800781,4 17,4 Z"></path>
            </g></g></svg></div>
      </header>
      <section style={{display:'grid',gridTemplateColumns:`repeat(auto-fit,319px)`,width:`100%`,gridGap:`20px`,justifyContent:`center`,justifyItems:`center`}}>
        {[c.map(c => <Link href={`/${c.i}`} style={{display:`flex`,flexDirection:`column`,width:'319px',border:'1px solid rgb(226, 223, 218)',boxShadow:'rgba(125, 125, 125, 0.2) 0px 0px 5px',borderRadius:`10px`,margin:`10px`,alignItems:`center`}}>
          <Image src={`/${c.i}/1_.png`}height="321"width="319" style={{borderTopLeftRadius:`10px`,borderTopRightRadius:`10px`}}/>
          <h2>{c.n}</h2>
          <p>{c.l} items</p>
          </Link>)]}
      </section>
      <section style={{display:'flex',flexDirection:'column',width:`100%`,alignItems:`flex-start`}}>
        <hr />
        <h1>CONTÁCTENOS</h1>
        <h2>Teléfono</h2>
        <p style={{textDecoration:`underline`}}>+593969607475</p>
        <h2>Dirección</h2>
        <p style={{textDecoration:`underline`}}>vopticalexpress1991@outlook.com</p>
      </section>
    </main>
  )
}
