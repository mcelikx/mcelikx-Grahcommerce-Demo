import { RichText } from '@graphcommerce/graphcms-ui'
import { ColumnOneBoxed } from '@graphcommerce/next-ui'
import { RowColumnOneProps } from './RowColumnOne'

export function RowColumnOneBoxed(props: RowColumnOneProps) {
  const { colOne, richTextOne } = props

  return (
    <ColumnOneBoxed>
      <RichText {...colOne} {...richTextOne} />
    </ColumnOneBoxed>
  )
}
