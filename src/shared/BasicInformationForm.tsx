
type UserData = {
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
    dateofbirth: string,
    countryofresidence: string,
    preferredtimezone: string,
    linkedIn: string,
}

type UserFormProps = UserData &  {
    updateData:(fields: Partial<UserData>) => void
}

export function BasicInformationForm  ({firstname, lastname, email, phonenumber, 
    dateofbirth, countryofresidence, preferredtimezone, linkedIn, updateData}: UserFormProps) {
    return(
        <>
                <div className="">
                    <div className="">
                    <div className="">
                        <label htmlFor="name">First Name</label>
                        <input  
                            type="text" 
                            id="firstname" 
                            required
                            value={firstname}
                            onChange={e => updateData({ firstname: e.target.value})}
                        />
                    </div>
                    <div className="">
                    <label htmlFor="name">Last Name</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        required
                        value={lastname}
                        onChange={e => updateData({ lastname: e.target.value})}
                    />
                    </div>
                    <div className="">
                    <label htmlFor="name">Email </label>
                    <input 
                        type="text" 
                        id="email" 
                        required
                        value={email}
                        onChange={e => updateData({ email: e.target.value})}
                    />
                    </div>
                    </div>
                    <div className="">
                        <div className="">
                    <label htmlFor="name">Phone Number</label>
                    <input 
                        type="text" 
                        id="phonenumber" 
                        required
                        value={phonenumber}
                        onChange={e => updateData({ phonenumber: e.target.value})}
                    />
                    </div>
                    <div className="">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        type="date" 
                        id="dateofbirth" 
                        required
                        value={dateofbirth}
                        onChange={e => updateData({ dateofbirth: e.target.value})}
                    />
                    </div>
                    </div>
                    <div className="">
                        <div className="">
                    <label htmlFor="countryofresidence">Country of Residence</label>
                    <input 
                        type="text" 
                        id="country_of_residence" 
                        required
                        value={countryofresidence}
                        onChange={e => updateData({ countryofresidence: e.target.value})}
                    />
                    </div>
                    <div className="">
                    <label htmlFor="pft">Preferred Time Zone</label>
                    <input 
                        type="text" 
                        id="preferred_time_zone" 
                        required
                        value={preferredtimezone}
                        onChange={e => updateData({ preferredtimezone: e.target.value})}
                    />
                    </div>
                    <div className="">
                    <label htmlFor="linkedin">LinkedIn Profile URL</label>
                    <input 
                        type="text" 
                        id="linkedin" 
                        required
                        value={linkedIn}
                        onChange={e => updateData({ linkedIn: e.target.value})}
                    />
                    </div>
                    </div>
                </div>
        </>
    )
}