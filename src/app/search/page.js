import Image from 'next/image'
import styles from '../page.module.css'

const c = [{name:'Hombres',image:'hombre',length:26},{name:'Mujeres',image:'mujer',length:40},{name:'niños',image:'nino',length:10},{name:'no se',image:'no',length:10}]

export default function Home() {
  return (
    <main className={styles.main}>
      <section style={{display:'flex',flexDirection:'column'}}>
        <Image src="/logo.jpeg"height="200"width="200"/>
        <h1>Optical Express</h1>
        <p>4 catálogos</p>
        <div style={{border: '1px solid rgb(226, 223, 218)', backgroundColor: 'rgb(255, 255, 255)'}}>
          <input type="search" placeholder="Busca productos" style={{paddingLeft: '10px', color: 'rgb(46, 46, 46)'}} />
          <svg width="16" height="16" viewBox="0 0 44 44">
            <defs></defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-435.000000, -34.000000)">
            <g id="icons8-search_filled" transform="translate(435.000000, 34.000000)" fill="#CCC" fillRule="nonzero">
            <path d="M17,0 C7.601563,0 0,7.601563 0,17 C0,26.398438 7.601563,34 17,34 C20.355469,34 23.460938,33.015625 26.09375,31.34375 L38.375,43.625 L42.625,39.375 L30.5,27.28125 C32.679688,24.421875 34,20.878906 34,17 C34,7.601563 26.398438,0 17,0 Z M17,4 C24.199219,4 30,9.800781 30,17 C30,24.199219 24.199219,30 17,30 C9.800781,30 4,24.199219 4,17 C4,9.800781 9.800781,4 17,4 Z"></path>
            </g></g></svg></div>
      </section>
      <section style={{display:'flex'}}>
        {[c.map(c => <div style={{display:`flex`}}>
          <Image src={`/${c.image}/1_.png`}height="200"width="200"/>
          <h2>{c.name}</h2>
          <p>{c.length} items</p>
          </div>)]}
      </section>
      <section style={{display:'flex',flexDirection:'column'}}>

      </section>
    </main>
  )
}
