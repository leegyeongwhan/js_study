import { useState } from 'react';

// Level 4: The data consumer
function GrandChild({ user, onUpdateUser }) {
    return (
        <div className="level-box level-4">
            <div className="role-badge role-grandchild">👶 GrandChild</div>
            <p>I finally got the data!</p>
            <p>User Name: <strong>{user.name}</strong></p>
            <button onClick={() => onUpdateUser({ name: 'Updated Name by GrandChild' })}>
                Change Name
            </button>
        </div>
    );
}

// Level 3: Just a passer-by
function Child({ user, onUpdateUser }) {
    return (
        <div className="level-box level-3">
            <div className="role-badge role-child">🧒 Child</div>
            <p className="fade-text">I pass props down...</p>
            <GrandChild user={user} onUpdateUser={onUpdateUser} />
        </div>
    );
}

// Level 2: Another passer-by
function Parent({ user, onUpdateUser }) {
    return (
        <div className="level-box level-2">
            <div className="role-badge role-parent">👨 Parent</div>
            <p className="fade-text">I pass props down too...</p>
            <Child user={user} onUpdateUser={onUpdateUser} />
        </div>
    );
}

// Level 1: Data Owner
export default function PropsDrillingExample() {
    const [user, setUser] = useState({ name: 'Alice' });

    return (
        <div className="level-box level-1">
            <div className="role-badge role-grandparent">👴 GrandParent</div>
            <p>I have the State.</p>
            <p>Current User: {user.name}</p>
            <Parent user={user} onUpdateUser={setUser} />
        </div>
    );
}
