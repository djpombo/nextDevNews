import styles from '../styles/home.module.scss';
import SEO from '../components/SEO';


export default function Home() {

    return (
    <>
      <SEO title="Dev News!" excludeTtileSuffix/>
      
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev</span>
          <h1>
            Bem vindo e bem-vinda<br />
            ao <span>Dev</span>News!
          </h1>
          <p>Um Blog com conteúdos extremamente <br />
          <span>relevantes para o seu aprendizado.</span></p>
        </section>
        <img src="/home.svg" alt="home image" />
      </main>
      
    </>
  )
}
