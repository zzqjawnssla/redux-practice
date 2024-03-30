import React from "react";
import {useSelector} from "react-redux";

const GrandSonBox = () => {

    let count = useSelector(state => state.count)

    return (
        <div>
            <h1>This is GrandSonBox{count}</h1>
        </div>
    )
}

export default GrandSonBox;