import { cookies } from "next/headers"

export default function Home() {
  const value = cookies().get('cookie1')

  return (
    <main style={{ padding: '50px;' }}>
      <h2>Create a new cookie named "cookie1" manually in the console with any value, and then refresh this page.</h2>
      <p>
        cookie1 value should be: {JSON.stringify(value)}
      </p>
    </main>
  )
}
