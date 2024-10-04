import { useContext } from 'react'
import ContextProducts from '../contexts/contextProduct'

const useProduct = () => useContext(ContextProducts)
export default useProduct
