---
group:
  title: 数据录入
  order: 1
title: AntdFormRender 动态渲染表单
---

<h2>AntdFormRender JSON创建表单</h2>

<p>
基于antd3，通过json，动态创建表单
</p>

<h3>代码演示</h3>

<h3>一行一列排列</h3>

```tsx
import React, { useRef } from 'react';
import { AntdFormRender } from 'xc-components-antd3';
import { Form, Button, Input } from 'antd';

export default () => {
  const formRef = useRef(null);
  const layoutData = [
    {
      type: Input,
      name: 'tel',
      label: '手机号',
      elProps: {
        maxLength: 11,
        placeholder: '请输入',
      },
      itemProps: {
        rules: [
          { required: true, message: '请输入' },
          { pattern: /^1\d{10}$/, message: '手机号必须为11位数字' },
        ],
      },
    },
    {
      type: Input.Password,
      label: '密码',
      name: 'pwd',
      elProps: {
        placeholder: '请输入',
      },
      itemProps: {
        rules: [{ required: true, message: '请输入' }],
      },
    },
    {
      render() {
        return (
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        );
      },
    },
  ];
  return <AntdFormRender wrappedComponentRef={formRef} layoutData={layoutData} />;
};
```

<h3>一行n列排列 (n<=4)</h3>

```tsx
import React, { useState, useRef } from 'react';
import { Form, Button, Input, Radio } from 'antd';
import { AntdFormRender } from 'xc-components-antd3';

export default () => {
  const formRef = useRef(null);
  const layoutData = [];
  const [cols, setCols] = useState(4);

  for (let i = 0; i < 11; i++) {
    layoutData.push({
      type: Input,
      label: `输入框${i + 1}`,
      placeholder: '请输入',
      name: `name${i}`,
    });
  }

  return (
    <Form layout="vertical">
      <Radio.Group onChange={(e) => setCols(Number(e.target.value))} value={cols}>
        <Radio value={1}>1行1列</Radio>
        <Radio value={2}>1行2列</Radio>
        <Radio value={3}>1行3列</Radio>
        <Radio value={4}>1行4列</Radio>
      </Radio.Group>

      <AntdFormRender
        layoutData={layoutData}
        cols={cols}
        wrappedComponentRef={formRef}
        formData={{ layout: 'vertical' }}
      />
    </Form>
  );
};
```

<h3>二维数组自定义布局</h3>

```tsx
import React from 'react';
import { Input, Radio, Form, Space, Button } from 'antd';
import { AntdFormRender } from 'xc-components-antd3';

export default () => {
  const layoutData = [
    [
      {
        type: Input,
        label: '姓名',
        name: 'name',
        elProps: {
          placeholder: '请填写姓名',
        },
        decoratorOptions: {
          rules: [{ required: true, message: '请填写' }],
        },
        itemProps: {
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
        },
      },
      {
        type: Radio.Group,
        label: '性别',
        name: 'gender',
        elProps: {
          options: [
            { label: '女', value: 0 },
            { label: '男', value: 1 },
          ],
        },
        decoratorOptions: {
          rules: [{ required: true, message: '请选择' }],
        },
        itemProps: {
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
        },
      },
    ],
    [
      {
        type: Input.TextArea,
        label: '个人简',
        elProps: {
          rows: 6,
        },
        placeholder: '请输入',
        name: 'bio',
        itemProps: {
          labelCol: { span: 2 },
          wrapperCol: { span: 22 },
        },
      },
    ],
    [
      {
        render() {
          return (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="default" style={{ marginRight: 10 }}>
                取消
              </Button>
              <Button type="primary">保存</Button>
            </div>
          );
        },
      },
    ],
  ];

  return <AntdFormRender layoutData={layoutData}></AntdFormRender>;
};
```
