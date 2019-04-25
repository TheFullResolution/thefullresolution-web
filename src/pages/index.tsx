import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import * as React from 'react'

import { Page } from '../components/Page/Page'
import { HomeDataQuery } from '../graphql-types'

interface Props {
  data: HomeDataQuery
}

const HomePage: React.FC<Props> = ({ data }) => (
  <Page>
    <Markdown>{data.home.content}</Markdown>
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
