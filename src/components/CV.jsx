import '../styles/CV.css'

function CV(props) {
    return (
        <div id="cv">
            <div id="person">
                <h1>{props.person.name}</h1>
                <p id="role">{props.person.role}</p>
                <div id="headline">
                    <p>{props.person.email}</p>
                    <p>{props.person.telephone}</p>
                </div>
            </div>
            <div id="experiences">
                {props.experiences.map((item) => {
                    return <div key={item.id}>
                        <h2>{item.title}</h2>
                        <div id="job-headline">
                            <p>{item.location}</p>
                            <p>{item.startDate} - {item.endDate}</p>
                        </div>
                        <p>{item.description}</p>
                    </div>
                })}
            </div>
            <div id="skills">
                <h2>Skills</h2>
                <ul>
                {props.skills.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
                </ul>
            </div>
            <div id="education">
                {props.educations.map((item) => {
                    return <div key={item.id}>
                        <div id="education-headline">
                        <p>{item.subject}</p>
                        <p>{item.college}</p>
                        </div>
                        <p>{item.period} {item.grade}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export { CV }