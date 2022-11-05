import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";


describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='Kanoha.com'/>)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('Kanoha.com')
  })

  test('after creation <span> should be displayed with correct status', () => {
    const component = create(<ProfileStatus status='Kanoha.com'/>)
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test('after creation <input> should\'t be displayed with correct status', () => {
    const component = create(<ProfileStatus status='Kanoha.com'/>)
    const root = component.root
    expect(() => {
      let input = root.findByType('input')

    }).toThrow()
  })

  test('after creation <span> should be displayed with correct status', () => {
    const component = create(<ProfileStatus status='Kanoha.com'/>)
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('Kanoha.com')
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='Kanoha.com'/>)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('Kanoha.com')
  })

  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status='Kanoha.com' updateStatus={mockCallback}/>)
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })

})
