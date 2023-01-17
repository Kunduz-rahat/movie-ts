import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as useActionsCreators from '../store/actions/movieActions'

export const useActions =()=>{
	const dispatch = useDispatch()
	return bindActionCreators(useActionsCreators, dispatch )
}