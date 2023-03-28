import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Menu from'../components/Menu';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
      <div>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="robots"  content="index, follow"/>
          <meta name="description" content="Teste LandPage"/>
          <meta name="author" content="Rômulo Evangelista de Oliveira"/>
          <meta name="viewport" content="initial-scale=1.0,width-device-width"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/fontawesome.min.css"/>
          <title>Teste HVEX Rômulo</title>
        </Head>
        <Menu/>

        <section className="top">
          <div className="max-width">
             <div className="top-content">
              <div className="text-1">Temos a solução</div>
              <div className="text-2">que a sua empresa precisa</div>
              <div className="text-3">Podemos ajudar a sua empresa</div>
              <a href="/contato">Entrar em contato</a>
            </div>
          </div>
        </section>

      </div>
  )
}
