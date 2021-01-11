import React from "react";
import { Radio, Table, Divider, TimePicker, DatePicker, Button } from 'antd';
import RadioGroup from './radioGroup'
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
//import TagGroup from './tagGroup'
import './activity.css';

const format = 'HH:mm';
const Datalist = [
    {
        id: "fegs",
        name: "来啊、快活啊",
        time: "16:00",
        owner: "Xie Lefan",
        description: "哈哈",
    },
    {
        id: "ffewe",
        name: "父子局",
        time: "18:00",
        owner: "Li Yilu",
        description: "嘿嘿",
    },
    {
        id: "dew",
        name: "大鸟转转转",
        time: "24:00",
        owner: "Yu Jingcheng",
        description: "我渴望有价值的对手",
    },
];

const columns = [
    {
        title: "名字",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "时间",
        dataIndex: "time",
        key: "time",
    },
    {
        title: "发起人",
        dataIndex: "owner",
        key: "owner",
    },
    {
        title: 'Action',
        dataIndex: "",
        key: 'action',
        render: () => <a>加入</a>
    },
];

const nameList = {
    "game": {
        "lol": "英雄联盟",
        "wow": "魔兽世界",
    },
    "sport": {
        "basketball": "篮球",
        "soccer": "足球"
    }
};

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uId: props.id,
            uName: props.name,
            type1: null,
            type2: null,
            date: null,
            time: null
        }
    }

    getChoice1 = (e) => {
        const tag = e.target;
        this.setState({ type1: tag.value.toString() });
    }

    getChoice2 = (e) => {
        const tag = e.target;
        this.setState({ type2: tag.value.toString() });
    }

    getDate = (value) => {
        this.setState({ date: value })
    }

    getTime = (value) => {
        this.setState({ time: value })
    }

    render() {
        return (
            <div>
                <div class="box">
                    <span class="word">分类</span>
                    <span class="bu">
                        <Radio.Group defaultValue="a" size="large" onChange={this.getChoice1} block buttonStyle="solid">
                            <Radio.Button value="sport">运动</Radio.Button>
                            <Radio.Button value="game">游戏</Radio.Button>
                        </Radio.Group><br />
                    </span>
                </div>
                <div class="box">
                    <span class="word">活动</span>
                    <span class="bu">
                        {this.state.type1 === null ?
                            <span></span> : <RadioGroup value={nameList[this.state.type1]} onChange={this.getChoice2} />
                        }
                    </span>
                </div>
                <div class="box">
                    <span class="word">日期</span>
                    <span class="bu">
                        <DatePicker onChange={this.getDate} />
                    </span>
                </div>
                <div class="box">
                    <span class="word">开始时间</span>
                    <span class="bu">
                        <TimePicker defaultValue={moment('00:00', format)} format={format} onChange={this.getTime} />
                    </span>
                </div>
                <Divider />
                <div class = "box">
                    <span class = "word">选择</span>
                    <span class = "bu">
                        {this.state.type1} {this.state.type2 ? " \\ " + this.state.type2 : ' '}
                        {this.state.date ? " \\ " + this.state.date.format('YYYY-MM-DD') : ' '} {this.state.time ? " \\ " + this.state.time.format('HH-mm') : ' '}
                    </span>
                    <Button id = "button" type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                </div>
                <Divider />
                <Table
                    columns = {columns}
                    expandable = {{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    }}
                    dataSource = {Datalist} 
                />
            </div>
        )
    }
}

export default Activity