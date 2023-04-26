import {useState} from 'react'

const useModal = (initialvalue = false) => {
    const [isOpenModal, setIsOpenModal] = useState(initialvalue);

    const openModal = () =>{
        setIsOpenModal(true)
    }
    const closeModal = () =>{
        setIsOpenModal(false)
    }

    return [isOpenModal, openModal, closeModal];
}

export default useModal