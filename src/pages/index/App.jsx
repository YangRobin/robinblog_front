/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import TestComponent from '../../components/TestComponet';
import { Button, Wrapper, Row } from '../../components/robin';
import request from '../../utils/request';

const { get } = request;
// const { Button } = Robin;

const App = (props) => {
  const [name, setName] = useState('robin');
  console.log(props)
  get('https://api.myjson.com/bins/ms891').then((res) => {
    console.log(res);
  });
  const changeName = () => {
    const tempName = name === 'robin' ? 'test' : 'robin';
    setName(tempName);
  };
  return (
    <div>
      <Wrapper>
        <Row span={3}>
          <div>test</div>
          <div>tset1</div>
        </Row>
        <Button type="primary">查看</Button>
        <Button type="danger">tishi</Button>
        <Button type="info">info</Button>
        <h1>前端架构</h1>
        <div>
          <TestComponent count={0} />
        </div>
        <h1>{name}</h1>
        <button onClick={changeName}>change name</button>
        <button>
          test we
        </button>
      </Wrapper>
    </div>
  );
};
export default App;
