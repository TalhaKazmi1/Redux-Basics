import { Store } from "./redux/store";
import { useSelector, useDispatch } from 'react-redux'
import {actionAPI} from './redux/actionAPI'

const useSharedDispatcher = () => useDispatch()
const useSharedSelector = useSelector

export{
    Store,
    useSharedDispatcher,
    useSharedSelector,
    actionAPI
}