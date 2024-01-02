'use client'
import React, {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const c=[{n:'Emporio Armani',i:'armani',l:2,p:112.99},{n:'Kenneth cole',i:'kenneth',l:1,p:76.49},{n:'Joe',i:'joe',l:3,p:76.99},{n:'Snowberry',i:'snowberry',l:8,p:73.80},{n:'Polaroid',i:'polaroid',l:9,p:79.45},{n:'Converse',i:'converse',l:9,p:83.29},{n:'Gap',i:'gap',l:4,p:94},{n:'Gant',i:'gant',l:4,p:76.49},{n:'Ray ban',i:'ray',l:4,p:119},{n:'Skechers',i:'skechers',l:5,p:76.49},{n:'Boss',i:'boss',l:8,p:108.60},{n:'Pepe jeans',i:'pepe',l:37,p:81.24},{n:'Timberland',i:'timberland',l:5,p:79.80},{n:'Banana republic',i:'banana',l:2,p:78.56},{n:'CK',i:'ck',l:3,p:95.58},{n:'Lacoste',i:'lacoste',l:8,p:115.62},{n:'Nike',i:'nike',l:10,p:112.23},{n:'Guess',i:'guess',l:20,p:93.25},{n:'Prada',i:'prada',l:4},{n:'Nautica',i:'nautica',l:3,p:99.99},{n:'Oakley',i:'oakley',l:2,p:142.00},{n:'OP',i:'op',l:8,p:77.29},{n:'Hombres',i:'hombre',l:36},{n:'Mujeres',i:'mujer',l:110},{n:'Niños',i:'nino',l:10},{n:'Titanium',i:'titanium',l:40},{n:'Acetato',i:'acetato',l:10},{n:'Metal',i:'metal',l:40}]

export default function Home() {
  const [searchV, setSearch] = useState('');
  const [results, filterC] = useState(c);
  useEffect(() => searchV.length ? filterC(results.filter(r => r.n.toLowerCase().includes(searchV))) : filterC(c),[searchV])
  return (
    <main className={styles.main}>
      <Head>
        <meta name="google" content="notranslate"/>
      </Head>
      <Link href="https://api.whatsapp.com/send?phone=593983440163" style={{bottom:`20px`,position:`fixed`,zIndex:10,right:`20px`,display:`flex`,alignItems:`center`,color:`black`,backgroundColor:`white`,padding:`6px 10px`,fontSize:`16px`,fontWeight:700,borderRadius:`50px`,cursor:`pointer`,boxShadow:`0px 1px 20px 0px rgb(0 0 0 / 10%)`,textDecoration:`none`}}><svg viewBox="0 0 48 48"width="30px"height="30px"fillRule="evenodd"clipRule="evenodd"><path fill="#fff"d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff"d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc"d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351"d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff"fillRule="evenodd"d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"clipRule="evenodd"></path></svg><h2>CHAT</h2></Link>
      <header style={{display:'flex',flexDirection:'column',alignItems:`center`}}>
        <Image src="/logo.jpeg"height="200"width="200"/>
        <h1>Optical Express</h1>
        <p>28 catálogos</p>
        <div style={{border:'1px solid rgb(226, 223, 218)',backgroundColor:'rgb(255, 255, 255)',borderRadius:'50px',boxShadow:'0 2px 4px 0 hsla(0,0%,40%,.1)',margin:'14px 20px',padding:'0px 12px',position:'inherit',width:'calc(100vw - 100px)',alignItems:`center`,display:`flex`,height:'55px'}}>
          <input type="search"placeholder="Busca productos"style={{paddingLeft:'10px',alignSelf:'stretch',backgroundColor:'initial',border:'none',boxShadow:'none',color:'#181d22',flex:1,fontSize:'16px',outline:0,width:'100%'}} onChange={e=>setSearch(e.target.value)}/>
          <svg width="16" height="16" viewBox="0 0 44 44">
            <defs></defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-435.000000, -34.000000)">
            <g id="icons8-search_filled" transform="translate(435.000000, 34.000000)" fill="#CCC" fillRule="nonzero">
            <path d="M17,0 C7.601563,0 0,7.601563 0,17 C0,26.398438 7.601563,34 17,34 C20.355469,34 23.460938,33.015625 26.09375,31.34375 L38.375,43.625 L42.625,39.375 L30.5,27.28125 C32.679688,24.421875 34,20.878906 34,17 C34,7.601563 26.398438,0 17,0 Z M17,4 C24.199219,4 30,9.800781 30,17 C30,24.199219 24.199219,30 17,30 C9.800781,30 4,24.199219 4,17 C4,9.800781 9.800781,4 17,4 Z"></path>
            </g></g></svg></div>
      </header>
      <section className="notranslate" style={{display:'grid',gridTemplateColumns:`repeat(auto-fit,319px)`,width:`100%`,gridGap:`20px`,justifyContent:`center`,justifyItems:`center`}}>
        {[results.map(c => <Link href={`/${c.i}`} style={{display:`flex`,flexDirection:`column`,width:'319px',border:'1px solid rgb(226, 223, 218)',boxShadow:'rgba(125, 125, 125, 0.2) 0px 0px 5px',borderRadius:`10px`,margin:`10px`,alignItems:`center`}}>
          <Image src={`/${c.i}/1_.png`}height="321"width="319" style={{borderTopLeftRadius:`10px`,borderTopRightRadius:`10px`}}/>
          <h2>{c.n}</h2>
          <p>{c.l} items</p>
          {c.n !== 'Prada' && <p>{c.p ? `${c.p}$` : `no se`}</p>}
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
