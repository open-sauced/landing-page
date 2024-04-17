import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Bugged on server-side redirect : https://github.com/vercel/next.js/issues/42556
// Todo: Implement server-side redirect when the issue is fixed

const RedirectUser = (): JSX.Element => {
  const router = useRouter()
  const username = router.query.username

  useEffect(() => {
    router.replace(`https://app.opensauced.pizza/user/${username}`)
  })

  return <></>
}

export default RedirectUser