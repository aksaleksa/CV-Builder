import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../styles/Form.css'
import { CV } from './CV.jsx'
import { Personal } from './Personal.jsx'
import { Experience } from './Experience.jsx'
import { Skills } from './Skills.jsx'
import { Education } from './Education.jsx'
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [person, setPerson] = useState({name: "Aleksandar", role: "Junior Programmer", email: "aleksaks27@gmail.com", telephone: "07588214424"});
    const [experience, setExperience] = useState({title: '', location: '', description: '', startDate: '', endDate: ''})
    const [experiences, setExperiences] = useState([]);
    const [skill, setSkill] = useState({name: ''});
    const [skills, setSkills] = useState([
        {name: 'HTML', id: 0}, {name:'CSS', id: 1}, {name: 'JavaScript', id: 2}, {name: 'React', id: 3}, {name: 'Bootstrap', id: 4},
        {name: 'Git & Github', id: 5}, {name: 'Testing (Jest)', id: 6}, {name:'Command Line', id: 7},  {name: 'Data Structures & Algorithms', id: 8}]);
    const [education, setEducation] = useState({subject: '', college: '', period: '', grade: ''})
    const [educations, setEducations] = useState([
        {subject: 'Applied Computational Science', college: 'Imperial College', period: '2020-21', grade: ''},
        {subject: 'Mechanical Engineering', college: 'Queen Mary University', period: '2015-18', grade: '1st'}
    ])
    
    const addSkill = () => {
        const newSkill = {name: skill, id: uuidv4()}
        const newSkills = [...skills, newSkill];
        setSkills(newSkills);
    }

    const deleteSkill = (skillId) => {
        const newSkills = skills.filter((item) => item.id !== skillId);
        setSkills(newSkills);
    }

    const addExperience = () => {
        const newExperience = {...experience, id: uuidv4()};
        const newExperiences = [...experiences, newExperience];
        setExperiences(newExperiences);
    }

    const deleteExperience = (experienceId) => {
        const newExperiences = experiences.filter((item) => item.id !== experienceId);
        setExperiences(newExperiences);
    }

    const addEducation = () => {
        const newEducation = {...education, id: uuidv4()};
        const newEducations = [...educations, newEducation];
        setEducations(newEducations);
    }

    const deleteEducation = (educationId) => {
        const newEducations = educations.filter((item) => item.id !== educationId);
        setEducations(newEducations);
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 accordion">
                    <h1>CV Builder</h1>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Personal Information
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Personal person={person} setPerson={setPerson}/>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Work Experience
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <Experience experience={experience} setExperience={setExperience} experiences={experiences} setExperiences={setExperiences} addExperience={addExperience} deleteExperience={deleteExperience}/>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Skills
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <Skills skill={skill} setSkill={setSkill} skills={skills} setSkills={setSkills} addSkill={addSkill} deleteSkill={deleteSkill}/>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Education History
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <Education education={education} setEducation={setEducation} educations={educations} setEducations={setEducations} addEducation={addEducation} deleteEducation={deleteEducation}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <CV person={person} experiences={experiences} skills={skills} educations={educations}/>
                </div>
            </div>
        </div>
    )
}

export { Form };