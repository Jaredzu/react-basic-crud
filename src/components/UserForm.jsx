import React, { useState } from 'react'


const UserForm = () => {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [id, setId] = useState("")




    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleId = (e) => {
        setId(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            id, username, name, age
        }

        console.log(user)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h3>New User:</h3>
                </div>
            </div>
            <div className="col-6 pt-4">
                <form>
                    <input placeholder="id" type="text" className="form-control mb-2" onChange={handleId} value={id} />
                    <input placeholder="username" type="text" className="form-control mb-2" onChange={handleUsername} value={username} />
                    <input placeholder="name" type="text" className="form-control mb-2" onChange={handleName} value={name} />
                    <input placeholder="age" type="text" className="form-control mb-2" onChange={handleAge} value={age} />

                    <button className="btn btn-success" onClick={handleSubmit}>
                        submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default UserForm