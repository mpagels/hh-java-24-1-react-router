import {useNavigate, useParams} from "react-router-dom";

function Course() {

    const params = useParams()

    const navigate = useNavigate()

    function myLogic() {
        navigate("/")
    }

    return <><h2>Course Page</h2>
        <p>Your course is {params.currywurst}</p>
    <button onClick={myLogic}>Start Logic and then go back to startpage</button>
    </>
}

export default Course