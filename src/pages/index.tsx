import * as React from 'react'
import { Page } from '../components/Page/Page'
import Markdown from 'markdown-to-jsx'

const HomePage: React.FC = () => (
  <Page>
    <Markdown>
      {`      
# Nec impia fortissima tantis Cyanen fabricataque caecis

## Iam ducebas elidite humanis luteave

Lorem markdownum **librata paterni**. Ille flamma pennis. Suppressa grates,
gravem certamine non respicere ovantem corripiens ora lignum. Erat legum, rite
angues hac levis sede diu cum, haec. Oris ait curvi vulneris sententia, et socii
laqueosque medioque.

Meo notum centum, prole sagittas quod semper, et nova, minuant. Molli educta ex
a iamque ubi ratus [papavera](http://est-visus.org/); hinc. Pacis crimina
Haemoniae ima in numen plenumque annum alit, submergere et equos Poeantia
abominor clarae. Nec paene, modo altam, Andros munere genus quiete vir luna
comitemque adnuit; alas.

1. Fecit Latonigenisque corpus in blandis et liliaque
2. Artes Gryneus non tandem
3. Vultus et Alcides

## Et ista meliora invicti quae

Cur magni, hoc quasi mediis in fera pia, sibi cava Scythiae ego. Urbem fere
nescis flatuque possint quondam viscera tantos relinquis iamque, annos
altissimus talis. In aetas quique! Letum blanditiae vulnera, aeris tenet dum
conlapsa barbariam dura: attulerat adsimulat nuper. Sopor opposuit quod
Argolicosque facinusque tangit ad Cepheni voluit.

> *Est* nuper ignibus fit lucem, est! *Sacra exarsit*, satis conpositas subito:
> in Parin, in coactis quam; erat fertur [indurata
> posset](http://senectae.io/caelebsquoque.html) Romani ingenium. Dicta magna
> sciet, volucri me vitare caudam *attulit Farfarus sedebat* procerum movit
> venit [animae](http://femineiset.org/). Et ora erat negarem exiguus stetit
> concustodita manus, mollitaque orbi.
`}
    </Markdown>
  </Page>
)

export default HomePage
