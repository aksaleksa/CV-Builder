function Personal(props) {

    return (
        <form>
            <div className="row">
                <div className="col">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={(event) => {
                        props.setPerson({...props.person, name: event.target.value})
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="role">Current Role</label>
                    <input type="text" id="role" onChange={(event) => {
                        props.setPerson({...props.person, role: event.target.value})
                    }}/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(event) => {
                        props.setPerson({...props.person, email: event.target.value})
                    }}/>
                </div>
                <div className="col">
                    <label htmlFor="phone">Telephone</label>
                    <input type="text" id="phone" onChange={(event) => {
                        props.setPerson({...props.person, telephone: event.target.value})
                    }}/>
                </div>
            </div>
        </form>
    )
}

export { Personal }