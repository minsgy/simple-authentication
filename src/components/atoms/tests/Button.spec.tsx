import { render, screen } from '@/tests/testUtils'
import { Button } from '../Button'

describe('Button', () => {
  context('버튼을 클릭했을 때', () => {
    const onClick = jest.fn()
    it('event가 실행 된다.', () => {
      render(<Button onClick={onClick}>버튼</Button>)
      screen.getByText('버튼').click()
      expect(onClick).toHaveBeenCalled()
    })
  })

  context('비활성화 된 버튼을 클릭했을 때', () => {
    const onClick = jest.fn()
    it('event가 실행 되지 않는다.', () => {
      render(
        <Button onClick={onClick} disabled>
          버튼
        </Button>,
      )
      screen.getByText('버튼').click()
      expect(onClick).not.toHaveBeenCalled()
    })
  })
})
