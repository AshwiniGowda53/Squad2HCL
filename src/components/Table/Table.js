import { useEffect, useState } from 'react';
import {Table} from 'antd';
import { fetchCustomerData } from '../../services';

const TableComponent = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
    ]
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const usersData = await fetchCustomerData();
            setUsers(usersData.data)
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>{users.length > 0 && <Table dataSource={users} columns={columns}/>}</div>
}

export default TableComponent;