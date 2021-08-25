import React from 'react';
import { Select, Form, Button } from 'antd';

const COL_SPAN = 24;

const layout = {
  labelCol: { span: COL_SPAN },
  wrapperCol: { span: COL_SPAN },
};

type SearchFormProps = {
    handleSearch: (data:any) => void,
    datasources?: string[],
    campaigns?: string[]
};

const SearchForm = ({ handleSearch, datasources, campaigns } : SearchFormProps) : JSX.Element  => {
  return (
    <Form
      name="basic"
      onFinish={handleSearch}
    >
      <Form.Item
        label="Datasources"
        name="datasources"
        {...layout}
      >
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="All"
          options={datasources?.map(d => ({ label: d, value: d }))}
        />
      </Form.Item>

      <Form.Item
        label="Campaigns"
        name="campaigns"
        {...layout}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="All"
          style={{ width: '100%' }}
          options={campaigns?.map(d => ({ label: d, value: d }))}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">🔎 &nbsp; Search</Button>
      </Form.Item>
    </Form>
  )
}

export default SearchForm;