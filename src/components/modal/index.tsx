import { createPortal } from 'react-dom'

const Modal = (): JSX.Element => {
  return createPortal(
    <dialog className="modal" open>
      <div className="modal-content">
        <h1>Modal</h1>
      </div>
    </dialog>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('home-root')!
  )
}

export default Modal
