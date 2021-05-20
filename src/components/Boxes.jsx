import { Row, Typography,Col } from 'antd';
import React from 'react';

const Boxes = ({stateData}) => {
    return (
        <div>
            <Row justify="space-between boxes__outer">
                <Col className="flex__col boxes bg__red" span="5">
                <Typography.Text className="color__red">Confirmed</Typography.Text>
                <Typography.Text className="color__red">{stateData.confirmed}</Typography.Text>
                </Col>
                <Col className="flex__col boxes bg__blue" span="5">
                <Typography.Text className="color__blue">Active</Typography.Text>
                <Typography.Text className="color__blue">{stateData.active}</Typography.Text>
                </Col>
                <Col className="flex__col boxes bg__green" span="5">
                <Typography.Text className="color__green">Recovered</Typography.Text>
                <Typography.Text className="color__green">{stateData.recovered}</Typography.Text>
                </Col>
                <Col className="flex__col boxes bg__grey" span="5">
                <Typography.Text className="color__grey">Deceased</Typography.Text>
                <Typography.Text className="color__grey">{stateData.deaths}</Typography.Text>
                </Col>
                <Row justify="end w__100">
                    <Col className="flex__col text__end m__20">
                    <Typography.Text className="color__green">LAST UPDATED</Typography.Text>
                    <Typography.Text className="color__green">{stateData.lastupdatedtime}</Typography.Text>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default Boxes;