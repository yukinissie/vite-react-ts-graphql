import { useUsersQuery } from './generated/graphql'

function App() {
  const { data, loading, error } = useUsersQuery()
  console.log(data)

  if (!data || loading) return <p>ローディング中です</p>
  if (error) return <p>エラーが発生しています。</p>

  return (
    <div style={{ margin: '3em' }}>
      <h1>GraphQL</h1>
      {data.users &&
        data.users.map((user) => <div key={user?.id}>Name: {user?.name}</div>)}
    </div>
  )
}

export default App
