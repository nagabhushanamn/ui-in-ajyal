import React, { useEffect, useState,useContext,useRef } from 'react';

const Counter = (props) => {

    // to define state & stateChange 
    let [count, setCount] = useState(0)
    let [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        console.log("componentDidMount()")
        return function(){
            console.log("componentWillUnmount()")
        }
    }, [])
    useEffect(() => {
        console.log("componentDidUpdate() only totalCount change")
    }, [totalCount])
    useEffect(() => {
        console.log("componentDidMount() + componentDidUpdate()")
    })

    return (
        <div className="card card-body">
            <button className="btn btn-primary" onClick={e => setCount(count + 1)}>{count}</button>
            <hr/>
            <button className="btn btn-primary" onClick={e => setTotalCount(totalCount + 1)}>{count}</button>
        </div>
    );
};

export default Counter;