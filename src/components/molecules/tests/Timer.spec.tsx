import { render, screen } from '@/tests/testUtils'
import { Timer } from '../Timer'

describe('Timer', () => {
  it('milesecond을 넣으면 MM:SS 형식으로 보여진다.', () => {
    const onFinish = jest.fn()
    render(<Timer timer={180000} onFinish={onFinish} />)
    expect(screen.getByTestId('timer')).toHaveTextContent('03:00')
  })

  it('변환 된 단위가 소수일 경우, 0으로 보여진다.', () => {
    const onFinish = jest.fn()
    render(<Timer timer={600} onFinish={onFinish} />)
    expect(screen.getByTestId('timer')).toHaveTextContent('00:00')
  })
})
