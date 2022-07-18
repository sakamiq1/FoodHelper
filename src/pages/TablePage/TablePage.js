import React, { useEffect } from 'react'
import './TablePage.scss'
import { useLocation } from 'react-router-dom'
import { Spin, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFoods, getAllFoods } from '../../features/foodSlice'

const TablePage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const foods = useSelector(getAllFoods)

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Nutrition', dataIndex: 'nutrition', key: 'nutrition' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    { title: 'Dislike', dataIndex: 'dislike', key: 'dislike' },
    { title: 'Like', dataIndex: 'like', key: 'like' },
    { title: 'Order', dataIndex: 'order', key: 'order' },
  ]

  const columns2 = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Nutrition', dataIndex: 'nutrition', key: 'nutrition' },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    { title: 'Dislike', dataIndex: 'dislike', key: 'dislike' },
    { title: 'Like', dataIndex: 'like', key: 'like' },
    { title: 'Order', dataIndex: 'order', key: 'order' },
    { title: 'S*', dataIndex: 'Smax', key: 'Smax' },
    { title: 'S-', dataIndex: 'Smin', key: 'Smin' },
    { title: 'C*', dataIndex: 'C', key: 'C' },
  ]

  useEffect(() => {
    dispatch(fetchFoods(location.state))
  }, [dispatch, location.state])

  return (
    <div className="table-container">
      {foods.DecisionTable && (
        <>
          <h1>Decision Table</h1>
          <Table
            pagination={{ pageSize: 5 }}
            columns={columns}
            loading={!foods.DecisionTable && <Spin />}
            dataSource={foods.DecisionTable}
          />
        </>
      )}
      {foods.NormalizeTable && (
        <>
          <h1>Normalize Table</h1>
          <Table
            pagination={{ pageSize: 5 }}
            columns={columns}
            loading={!foods.NormalizeTable && <Spin />}
            dataSource={foods.NormalizeTable}
          />
        </>
      )}
      {foods.ResultTable && (
        <>
          <h1>Result Table</h1>
          <Table
            pagination={{ pageSize: 5 }}
            columns={columns2}
            dataSource={foods.ResultTable}
            loading={!foods.ResultTable && <Spin />}
            summary={() => (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell>A*</Table.Summary.Cell>
                  {foods.Amax &&
                    foods.Amax.map((item) => (
                      <Table.Summary.Cell>{item}</Table.Summary.Cell>
                    ))}
                </Table.Summary.Row>
                <Table.Summary.Row>
                  <Table.Summary.Cell>A-</Table.Summary.Cell>
                  {foods.Amin &&
                    foods.Amin.map((item) => (
                      <Table.Summary.Cell>{item}</Table.Summary.Cell>
                    ))}
                </Table.Summary.Row>
              </Table.Summary>
            )}
          />
        </>
      )}
    </div>
  )
}

export default TablePage
