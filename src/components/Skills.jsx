import { useForm } from "react-hook-form"

function Skills(props) {
    const { register, reset } = useForm();

    return (
        <form>
            <input {...register("skill")} type="text" id="skill" onChange={(event) => {
                props.setSkill(event.target.value);
            }}/>
            <button id="add-skill" className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                props.addSkill()
                props.setSkill("");
                reset({"skill": ""});
            }}>Add Skill</button>

            <ul>
                {props.skills.map(skill => {
                    return <li key={skill.id}>{skill.name}<button id="delete-skill" className="btn btn-danger btn-small" onClick={() => {
                        props.deleteSkill(skill.id)
                    }}>×</button></li>
                })}
            </ul>
        </form>
    )
}

export { Skills }