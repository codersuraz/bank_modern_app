import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <div id='customers' className={`${styles.flexCenter} mb-10 flex-wrap w-full`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt={'client'} className="sm:w-[192px] w-[100px] object-contain hover:invert"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients