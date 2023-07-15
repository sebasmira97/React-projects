import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  const formatUserName = (userName) => `@${userName}`

  const users = [
    {
      userName: 'sebasmira97',
      name: 'Sebastian Restrepo Mira',
      initialIsFollowing: true
    },
    {
      userName: '_laparce_',
      name: 'Valeria',
      initialIsFollowing: false
    },
    {
      userName: 'stefaniart20',
      name: 'Estefania Rodriguez',
      initialIsFollowing: false
    },
    {
      userName: 'teffcode',
      name: 'Estefany Aguilar',
      initialIsFollowing: true
    },
  ]

  return(
    <section className='App'>
      {
        users.map(user => {
          const { userName, name, initialIsFollowing } = user
          return (
            <TwitterFollowCard key={userName} formatUserName={formatUserName} userName={userName} name={name} initialIsFollowing={initialIsFollowing}/>
          )
        })
      }
    </section>
    
  )
}