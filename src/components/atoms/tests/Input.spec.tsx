import { render, screen } from '@/tests/testUtils'
import { Input } from '../Input'

describe('Input', () => {
  context('입력 상태가 아니면', () => {
    it('안내 문구를 보여준다. (placeholder)', () => {
      render(<Input name="test" placeholder="입력하세요" />)
      expect(screen.getByPlaceholderText('입력하세요')).toBeInTheDocument()
    })
  })
})
