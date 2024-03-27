import { useForm } from "react-hook-form"

function Experience(props) {
    const { register, setValue, reset } = useForm();

    return (
        <form>
            <div className="row">
                <div className="col">
                    <label htmlFor="title">Title</label>
                    <input {...register("title")} type="text" id="title" onChange={(event) => {
                        props.setExperience({...props.experience, title: event.target.value});
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="location">Location & Company</label>
                    <input {...register("location")} type="text" id="location" onChange={(event) => {
                        props.setExperience({...props.experience, location: event.target.value});
                    }}/>
                </div>
            </div>
            <div className="col-sm-6">
                <label htmlFor="description">Description</label>
                <textarea {...register("description")}  cols="20" rows="5" id="description" onChange={(event) => {
                    props.setExperience({...props.experience, description: event.target.value});
                }}/>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="startDate">Start Date</label>
                    <input {...register("startDate")} type="date" id="startDate" onChange={(event) => {
                        props.setExperience({...props.experience, startDate: event.target.value});
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="endDate">End Date</label>
                    <input {...register("endDate")} type="date" id="endDate" onChange={(event) => {
                        props.setExperience({...props.experience, endDate: event.target.value});
                    }}/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                props.addExperience();
                props.setExperience({title: '', location: '', description: '', startDate: '', endDate: ''});
                reset({
                    "title": "",
                    "location": "",
                    "description": "",
                    "startDate": "",
                    "endDate": ""
                })
            }}>Add Experience</button>
        
            <ul>
                {props.experiences.map(item => {
                    return <li key={item.id}>
                        <div>{item.title}</div>
                        <div>
                            {item.startDate} {item.endDate}
                            <button id="edit" className="btn btn-small" onClick={() => {
                                props.deleteExperience(item.id)
                                const newExperience = props.experiences.filter(entry => entry.id === item.id)[0];
                                props.setExperience({title: `${newExperience.title}`, location: `${newExperience.location}`, description: `${newExperience.description}`, startDate: `${newExperience.startDate}`, endDate: `${newExperience.endDate}`})
                                setValue("title", `${newExperience.title}`);
                                setValue("location", `${newExperience.location}`);
                                setValue("description", `${newExperience.description}`);
                                setValue("startDate", `${newExperience.startDate}`);
                                setValue("endDate", `${newExperience.endDate}`);
                            }}>Edit</button>
                            <button className="btn btn-small btn-danger" onClick={() => {props.deleteExperience(item.id)}}>Delete</button>
                        </div>
                    </li>
                })}
            </ul>
        </form>
    )
}

export { Experience }