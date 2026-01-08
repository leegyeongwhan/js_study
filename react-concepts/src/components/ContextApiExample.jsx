import { useState, createContext, useContext } from 'react';

// 1. Create Context
const UserContext = createContext();

// Level 4: The data consumer
function GrandChild() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="level-box level-4">
            <div className="role-badge role-grandchild">👶 GrandChild</div>
            <p>Direct Access via Context!</p>
            <p>User Name: <strong>{user.name}</strong></p>
            <button onClick={() => setUser({ name: 'Updated via Context' })}>
                Change Name
            </button>
        </div>
    );
}

// Level 3
function Child() {
    return (
        <div className="level-box level-3">
            <div className="role-badge role-child">🧒 Child</div>
            <p className="clean-text">No props passing here! ✨</p>
            <GrandChild />
        </div>
    );
}

// Level 2
function Parent() {
    return (
        <div className="level-box level-2">
            <div className="role-badge role-parent">👨 Parent</div>
            <p className="clean-text">Just a clean container.</p>
            <Child />
        </div>
    );
}

// Level 1
export default function ContextApiExample() {
    const [user, setUser] = useState({ name: 'Alice' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div className="level-box level-1">
                <div className="role-badge role-grandparent">👴 GrandParent (Provider)</div>
                <p>Broadcasting Data...</p>
                <p>Current User: {user.name}</p>
                <Parent />
            </div>
        </UserContext.Provider>
    );
}
