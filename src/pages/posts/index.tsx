import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from "@prismicio/client";
import styles from './styles.module.scss';
export default function Posts() {
   return (
      <>
         <Head>
            <title>Posts | igNews</title>
         </Head>
         <main className={styles.container}>
            <div className={styles.posts}>
               <a>
                  <time>12 de maio de 2021</time>
                  <strong>
                     CNM - MINISTÉRIO DA ECONOMIA DIVULGA ALTERAÇÃO NO CRONOGRAMA 
                     PARA EXECUÇÃO DAS EMENDAS INDIVIDUAIS NA MODALIDADE ESPECIAL
                  </strong>
                  <p>A Secretaria de Gestão da Secretaria de Desburocratização, 
                     Gestão e Governo Digital do Ministério da Economia, por meio 
                     do Departamento de Transferências da União, divulgou na última 
                     quarta-feira, 26 de maio, a alteração no cronograma para execução 
                     das emendas individuais na modalidade especial. 
                  </p>
               </a>
               <a>
                  <time>12 de maio de 2021</time>
                  <strong>
                     CNM - MINISTÉRIO DA ECONOMIA DIVULGA ALTERAÇÃO NO CRONOGRAMA 
                     PARA EXECUÇÃO DAS EMENDAS INDIVIDUAIS NA MODALIDADE ESPECIAL
                  </strong>
                  <p>A Secretaria de Gestão da Secretaria de Desburocratização, 
                     Gestão e Governo Digital do Ministério da Economia, por meio 
                     do Departamento de Transferências da União, divulgou na última 
                     quarta-feira, 26 de maio, a alteração no cronograma para execução 
                     das emendas individuais na modalidade especial. 
                     A data de divulgação dos beneficiários na Plataforma +Brasil, 
                     anteriormente prevista para 30 de maio, agora está para prevista 
                     até 30 de junho. De acordo com o comunicado, a atualização foi 
                     necessária para racionalizar os processos de solicitações de 
                     todas as alterações orçamentárias, a partir do corrente exercício, 
                     não sendo mais necessário o envio de ofícios aos órgãos detentores 
                     das emendas.
                  </p>
               </a>
               <a>
                  <time>12 de maio de 2021</time>
                  <strong>
                     CNM - MINISTÉRIO DA ECONOMIA DIVULGA ALTERAÇÃO NO CRONOGRAMA 
                     PARA EXECUÇÃO DAS EMENDAS INDIVIDUAIS NA MODALIDADE ESPECIAL
                  </strong>
                  <p>A Secretaria de Gestão da Secretaria de Desburocratização, 
                     Gestão e Governo Digital do Ministério da Economia, por meio 
                     do Departamento de Transferências da União, divulgou na última 
                     quarta-feira, 26 de maio, a alteração no cronograma para execução 
                     das emendas individuais na modalidade especial. 
                     A data de divulgação dos beneficiários na Plataforma +Brasil, 
                     anteriormente prevista para 30 de maio, agora está para prevista 
                     até 30 de junho. De acordo com o comunicado, a atualização foi 
                     necessária para racionalizar os processos de solicitações de 
                     todas as alterações orçamentárias, a partir do corrente exercício, 
                     não sendo mais necessário o envio de ofícios aos órgãos detentores 
                     das emendas.
                  </p>
               </a>
            </div>
         </main>
      </>
   );
}

export const getStaticProps: GetStaticProps = async() => {
   const prismic = getPrismicClient()

   const response = await prismic.query([
      Prismic.predicates.at('document.type', 'post')
   ], {
      fetch: ['post.title', 'post.content'],
      pageSize: 100
   })

   console.log(response);

   return {
      props: {

      }
   }
}