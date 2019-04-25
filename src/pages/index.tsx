import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import * as React from 'react'

import { Page } from '../components/Page/Page'

const HomePage: React.FC = () => (
  <Page>
    <Markdown />
  </Page>
)

export default HomePage

export const query = graphql`
  query HomeData {
    home {
      content
    }
  }
`
