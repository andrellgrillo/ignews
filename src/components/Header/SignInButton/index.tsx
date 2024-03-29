import { signIn, useSession, signOut } from 'next-auth/client';

import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButto() {
   const [session] = useSession()
   return session
   ?(
      <button type="button" className={styles.signInButton} onClick={() => signOut()}>
         <FaGithub color="#04d361" />
         {session.user.name} 
         <FiX color="#737380" className={styles.closeIcon} />
      </button>
   )
   :(
      <button 
         type="button" 
         className={styles.signInButton}
         onClick={() => signIn('github')}
      >
         <FaGithub color="#eba147" />
         Sign in with Github
      </button>
   )
}