import react from 'react';
import {useState} from 'react'
import { CustomTable } from '../components/CustomTable/CustomTable';
import { Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { fakeData } from '../data/fakeDataNews';

const ManageNews = () => {
  const [data, setData] = useState(fakeData);

  const columns = [
    {
      key: 0,
      title: 'ID',
      dataIndex: 'id'
    },{
      key: 1,
      title: 'Imagen',
      dataIndex: 'image'
    },
    {
      key: 2,
      title: 'Nombre Noticia',
      dataIndex: 'newsName'
    },
    {
      key: 3,
      title: 'Descripcion',
      dataIndex: 'description'
    },
    {
      key: 4,
      title: 'Fecha',
      dataIndex: 'dateNews'
    },
    {
      key: 5,
      title: 'Acciones',
      render: (record) => {
        return <>
          <EditOutlined />
          <DeleteOutlined 
            style={{ color: 'red', marginLeft: 12 }} 
            onClick={() => onDeleteNews(record)}
          />
        </>   
      }
    }
  ];

  const onDeleteNews = (record) => {
    Modal.confirm({
      title: '¿Estás seguro que quieres borrar esta noticia?',
      cancelText: 'Cancelar',
      okText: 'Si',
      okType: 'danger',
      onOk:() => {
        setData((prevNews) => {
          return prevNews.filter((news)=> news.id !== record.id);
        })
      }
    })
  }

  const onAddNews = () => {
    const randomNumber = parseInt(Math.random(1) * 1000)
    const newNews = {
      id: randomNumber,
      image: 'image'+randomNumber,
      newsName: 'Name News' + randomNumber,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      dateNews: randomNumber+' abril 2023'
    }
    setData(prevNews => {
      return [...prevNews, newNews]
    });
  }


  return (
    <>
      <Button 
        onClick={onAddNews}
        style={{ marginBottom: 12 }} >Agregar Noticia
      </Button>
      <CustomTable 
        columns={columns} 
        data={data} 
      />
    </>
  )
}

export default ManageNews