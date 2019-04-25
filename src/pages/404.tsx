import * as React from 'react'
import { GoIssueOpened } from 'react-icons/go'
import { Page } from '../components/Page/Page'

const Page404: React.FC = () => (
  <Page page="404">
    <div style={{ textAlign: 'center' }}>
      <h1>
        <GoIssueOpened /> 404 PAGE <GoIssueOpened />
      </h1>
      <p>{`I am sorry, the page you are looking for, doesn't exists.`}</p>
    </div>
  </Page>
)

export default Page404
