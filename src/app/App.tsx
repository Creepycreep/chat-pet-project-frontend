import './App.css'
import { RoutePage } from '@pages/RoutePage.tsx'
import { WithAppProviders } from '@app/providers/WithAppProviders.tsx'
import { Layout } from '../layout/Layout.tsx'

export function App() {
  return (
    <WithAppProviders>
      <Layout>
        <RoutePage />
      </Layout>
    </WithAppProviders>
  )
}
