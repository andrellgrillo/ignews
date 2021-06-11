import Link from 'next/link';

import {SignInButto} from './SignInButton';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
   return(
      <header className={styles.headerContainer}>
         <div className={styles.headerContent}>
            <img src="/images/logo.svg" alt="logo" />
            <nav>
               <ActiveLink activeClassName={styles.active} href='/'>
                  <a>Home</a>
               </ActiveLink>
               <ActiveLink activeClassName={styles.active} href='/posts' prefetch>
                  <a>Posts</a>
               </ActiveLink>
            </nav>
            <SignInButto />
         </div>
      </header>
   )
}