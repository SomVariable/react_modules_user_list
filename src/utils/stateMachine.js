import Error from "../components/error/Error";
import Skeleton from "../components/skeleton/Skeleton";
import Spinner from "../components/spinner/Spinner";
import Success from "../components/success/Success";


function stateMachine(process, Component, data, waiting, loading, confirmed, success, error) {
    
     const waitingFn   = waiting? waiting : () => <Spinner />,
           loadingFn   = loading? loading : () => <Skeleton />,
           confirmedFn = confirmed? confirmed : () => <Component {...data}/>,
           successFn = success? success : () => <Success/>,
           errorFn     = error? error : () => <Error />;

    switch(process){
        case "waiting": 
            return waitingFn()
        break;
        case "loading":
            return loadingFn()
        break;
        case "confirmed":
            return confirmedFn()
        break;
        case "success": 
            return successFn()
        break;
        case "error":
            return errorFn()
        break;
        default:
            throw new Error("unexpected state error")
    }
}

export default stateMachine