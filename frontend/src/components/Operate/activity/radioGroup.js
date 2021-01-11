import React from "react";
import { Radio } from 'antd';

function RadioGroup (props) {
    /*for (let i = 0; i < props.actList.length; i++) {

    }*/
    var keyli = Object.keys (props.value);
    return (
        <Radio.Group defaultValue="a" onChange = {props.onChange}  buttonStyle="solid">
            <Radio.Button value={keyli[0]}>{props.value[keyli[0]]}</Radio.Button>
            <Radio.Button value={keyli[1]}>{props.value[keyli[1]]}</Radio.Button>
        </Radio.Group>
    )
}

export default RadioGroup