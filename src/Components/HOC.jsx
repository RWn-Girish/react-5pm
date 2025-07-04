const HOCCOMP = (Comp) => {
    return ({isLoading, props}) => {
        if(isLoading){
            return <h2>Loading....</h2>
        }else{
            return <Comp props={props} />
        }
    }
};

export default HOCCOMP;