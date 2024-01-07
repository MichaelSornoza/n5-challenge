export interface IUseModalReturn {
  openModal: () => void
  closeModal: () => void
}

export interface IUseModal {
  children: JSX.Element
  title: string
  description: string
}

const useModal = ({ children, title, description }: IUseModal): IUseModalReturn => {
  console.log('useModal', children, title, description)

  return {
    openModal: () => {
      console.log('open modal')
    },
    closeModal: () => {
      console.log('close modal')
    }
  }
}

export default useModal
