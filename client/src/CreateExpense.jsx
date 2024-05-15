import axios from 'axios'
import React, {useState} from 'react'

const CreateExpense = () => {
    const [values, setValues] = useState({
        name: "",
        cost: "",
        date: "",
        recurring: ""
    })
    return (
        <div className = "d-flex align-items-center flex-column mt-3">
            <h1>Add an Expense</h1>
            <form className = 'w-50'>
                <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Name of Expense:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name of expense" name="name" onChange = {(e) => setValues({...values, name: e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="cost" class="form-label">Cost:</label>
                    <input type="number" class="form-control" placeholder="Enter cost" name="cost" onChange = {(e) => setValues({...values, cost: e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="date" class="form-label">Date Paid:</label>
                    <input type="date" class="form-control" placeholder="Enter date paid" name="date" onChange = {(e) => setValues({...values, date: e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="recurring" class="form-label">Recurring Expense?:</label>
                    <input type="text" class="form-control" placeholder="Enter 'yes' or 'no'" name="recurring" onChange = {(e) => setValues({...values, recurringe: e.target.value})}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CreateExpense