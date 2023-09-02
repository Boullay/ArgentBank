import { useState } from "react";
import { getUserName } from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Store/actions/userAction";


function EditName({ setToggle }) {
    const [userName, setUserName] = useState();
    const [error, setError] = useState();
    const token = useSelector(state => state.userState.token);
    const dispatch = useDispatch();
    async function onSubmit(e) {
        e.preventDefault()
        try {
            if (userName === "" || userName === undefined) {
                setError("username empty")
                return false
            }
            const response = await getUserName(token, userName)
            dispatch(setUser(response.body))
            setToggle(false)
        }
        catch (e) {
            console.log(e)
        }
    }
    return (<>
        <div>
            <h1>Edit user info</h1>
        </div>
        <form onSubmit={onSubmit}>
            <div className="form-display form-username">
                <div className="form-label">
                    <label for="Username">Username : </label>
                    <input type="text" id="Username" size="21" onChange={(e) => setUserName(e.target.value)}></input>
                </div>
                <div className="form-label">
                    <label for="Lastname" >Firstname : </label>
                    <input type="text" id="Firstname" size="21" disabled></input>
                </div>
                <div className="form-label">
                    <label for="Lastname" >Lastname : </label>
                    <input type="text" id="Lastname" size="21" disabled></input>
                </div>
            </div>
            <div>
                {error && <p className="Message-error">{error}</p>}
                <div className="form-display form-bnt">
                    <button className="edit-button save-cancel" type="submit">Save</button>
                    <button className="edit-button save-cancel" onClick={() => setToggle(false)}>Cancel</button>
                </div>
            </div>

        </form>
    </>

    )
}

export default EditName;