import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Expenses = () => {
    const [expenses, setExpenses] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030')
            .then(res => setExpenses(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className = "container mt-5">
            {expenses.length !== 0 ?
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name of Expense</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Date Paid</th>
                        <th scope="col">Recurring Expense?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map(expense =>
                            <tr key={expense.id}>
                                <td>{expense.id}</td>
                                <td>{expense.name}</td>
                                <td>{expense.cost}</td>
                                <td>{expense.date}</td>
                                <td>{expense.recurring}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            : <h2>No Expenses</h2>
        }
        </div>
    )
}

export default Expenses