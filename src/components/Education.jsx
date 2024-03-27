import { useForm } from "react-hook-form"

function Education(props) {
    const { register, setValue, reset } = useForm();

    return (
        <form>
            <div className="row">
                <div className="col">
                    <label htmlFor="subject">Subject</label>
                    <input {...register("subject")} type="text" id="subject" onChange={(event) => {
                        props.setEducation({...props.education, subject: event.target.value});
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="college">College</label>
                    <input {...register("college")} type="text" id="college" onChange={(event) => {
                        props.setEducation({...props.education, college: event.target.value});
                    }}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="period">Period</label>
                    <input {...register("period")} type="text" id="period" onChange={(event) => {
                        props.setEducation({...props.education, period: event.target.value});
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="grade">Grade Achieved</label>
                    <input {...register("grade")} type="text" id="grade" onChange={(event) => {
                        props.setEducation({...props.education, grade: event.target.value});
                    }}/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={(event) => {
                event.preventDefault()
                props.addEducation()
                props.setEducation({subject: '', college: '', period: '', grade: ''});
                reset({
                    "subject": "",
                    "college": "",
                    "period": "",
                    "grade": ""
                })
            }}>Add Education</button>
            <ul>
                {props.educations.map(item => {
                    return <li key={item.id}>
                        <div>{item.subject} {item.college}</div>
                        <div>
                            {item.period}
                            <button id="edit" className="btn btn-small" onClick={() => {
                                props.deleteEducation(item.id)
                                const newEducation = props.educations.filter(entry => entry.id === item.id)[0];
                                props.setEducation({subject: `${newEducation.subject}`, college: `${newEducation.college}`, period: `${newEducation.period}`, grade: `${newEducation.grade}`})
                                setValue("subject", `${newEducation.subject}`);
                                setValue("college", `${newEducation.college}`);
                                setValue("period", `${newEducation.period}`);
                                setValue("grade", `${newEducation.grade}`);
                            }}>Edit</button>
                            <button className="btn btn-small btn-danger" onClick={() => {props.deleteEducation(item.id)}}>Delete</button>
                        </div>
                    </li>
                })}
            </ul>
        </form>
        
    )
}

export { Education }