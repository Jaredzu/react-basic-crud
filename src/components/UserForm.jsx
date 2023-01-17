import React from 'react'

const UserForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h3>New User</h3>
                </div>
            </div>
            <div className="col-6">
                <form>
                    <input placeholder="id" type="text" className="form-control mb-2" />
                    <input placeholder="username" type="text" className="form-control mb-2" />
                    <input placeholder="name" type="text" className="form-control mb-2" />
                    <input placeholder="age" type="text" className="form-control mb-2" />

                    <button className="btn btn-success">
                        submit
                    </button>

                </form>
            </div>

        </div>
    )
}

export default UserForm