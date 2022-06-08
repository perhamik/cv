import PageContext from '@/src/context/PageContext'
import { useContext } from 'react'
import summary from './Summary.module.scss'

export default function Summary({ content }: { content: string }) {
  const { loading } = useContext(PageContext)

  return (
    <div className={summary.container} data-loaded={!loading}>
      <h4 className={summary.title}>Summary</h4>
      <p className={summary.text}>{content}</p>
    </div>
  )
}
