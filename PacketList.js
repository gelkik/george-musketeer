import React from "react";
import PacketForm from './PacketForm';

function PacketList({handleNewUser,setUserData}){
    return (
        <div>
            <PacketForm
                setUserData={setUserData}
                // handleSubmit={handleSubmit}
                // setFormData={setFormData}
                handleNewUser={handleNewUser}
                // formData={formData}
            />
        </div>
    )
}

export default PacketList;
