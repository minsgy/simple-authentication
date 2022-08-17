import { render } from '@/tests/testUtils'
import { Spinner } from '../Spinner'

describe('Spinner', () => {
  context('로딩 중 이라면,', () => {
    const { container } = render(<Spinner isLoading={true} />)
    it('로딩 Spinner가 보인다.', () => {
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  context('로딩 중 아니라면,', () => {
    const { container } = render(<Spinner isLoading={false} />)
    it('Spinner가 보이지 않는다.', () => {
      expect(container.firstChild).toBeNull()
    })
  })
})
