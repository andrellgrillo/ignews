import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripejs';
import styles from './styles.module.scss'

interface SubscribebuttonProps {
   priceId: string
}

export function SubscribeButton({priceId}: SubscribebuttonProps) {
   const [session] = useSession()
   async function handleSubscribe() {
      if (!session) {
         signIn('github')
         return;
      }
      //criação checkout-session
      try {
         const response = await api.post('subscribe')
         const { sessionId } = response.data;
         const stripe = await getStripeJs()
         await stripe.redirectToCheckout({sessionId})
      } catch (error) {
         alert(error.message);
      }
   }

   return(
      <button 
         type="button" 
         className={styles.subscribeButton}
         onClick={handleSubscribe}
      >
         Subscribe Now
      </button>
   )
}