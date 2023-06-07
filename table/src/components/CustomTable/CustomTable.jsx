import { Table } from 'antd';

export const CustomTable = ({ columns, data }) => {
  let uniqueId = (key) => key.id;

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        key={uniqueId}
        rowKey={uniqueId}
      >
      </Table>
    </>
  )
}