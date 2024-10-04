import { useContext } from 'react'
import ContextCart from '../contexts/contextCart'

const useCart = () => useContext(ContextCart)
export default useCart
