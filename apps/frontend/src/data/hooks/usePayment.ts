import { useContext } from 'react'
import ContextPayment from '../contexts/contextPayment'

const usePayment = () => useContext(ContextPayment)
export default usePayment
