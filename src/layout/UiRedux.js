import React, { useState, useRef } from 'react'
import "../App.css"
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUsername } from '../features/Users'

const UiRedux = () => {

    const userList = useSelector(state => state.users.value);
    const dispatch = useDispatch()

    // const [name, setname] = useState("");
    const inputname = useRef("")
    const name = inputname.current.value;
    const [username, setusername] = useState("");
    const [newusername, setNewusername] = useState("");

    return (
        <div className="App">
            <div className='addUser'>

                <input type="text" placeholder='Name ...' ref={inputname} />

                <input type="text" placeholder='Usersname ...'
                    onChange={(e) => {
                        setusername(e.target.value)
                    }} />

                <button onClick={() => {
                    dispatch(
                        addUser({
                            id: userList[userList.length - 1].id + 1,
                            name: name,
                            username: username
                        })
                    )
                }}>
                    Add User </button>

            </div>

            <div className='displayUsers'>

                {userList.map((user, index) => {
                    return (
                        <div key={index}>
                            <h4>{user.name}</h4>
                            <h4>{user.username}</h4>

                            <input type="text" placeholder='Update username ...'
                                onChange={(e) => {
                                    setNewusername(e.target.value)
                                }} />
                            <button
                                onClick={() => {
                                    dispatch(
                                        updateUsername({ id: user.id, username: newusername })
                                    );
                                }}>Update Users</button>

                            <button
                                onClick={() => {
                                    dispatch(deleteUser({ id: user.id }))
                                }}>Delete Users</button>

                        </div>
                    )
                }
                )}

            </div>

        </div>
    )
}

export default UiRedux
