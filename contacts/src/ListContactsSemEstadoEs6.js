import React from 'react';

const ListContactsSemEstadoEs6 = (props) => {
    return (
        <ol className='contact-list'>
            {props.contacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }}>
                    </div>
                    <div className='contact-details'>
                        <p>{contact.name} - ES6</p>
                        <p>{contact.email}</p>
                    </div>
                    <button className='contact-remove'>
                        remove
                    </button>
                </li>
            ))}
        </ol>
    )
}

export default ListContactsSemEstadoEs6;