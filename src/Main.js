import React from 'react';
import { Row, Col } from 'antd';
import Customer360Form from './Customer360Form';


const Main =()=>{
return <>
<Row>
    <Col span={10}>
    Table
    </Col>
    <Col span = {14}>
    <Customer360Form/>
    </Col>
</Row>
</>
}

export default Main;