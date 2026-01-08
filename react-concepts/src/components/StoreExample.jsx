import { create } from 'zustand';

// 1. Create Store
const useUserStore = create((set) => ({
    user: { name: 'Alice' },
    updateUser: (newName) => set((state) => ({ user: { ...state.user, name: newName } })),
}));

// Level 4
function GrandChild() {
    const { user, updateUser } = useUserStore();

    return (
        <div className="level-box level-4">
            <div className="role-badge role-grandchild">👶 GrandChild</div>
            <p>Fetched from Global Store!</p>
            <p>User Name: <strong>{user.name}</strong></p>
            <button onClick={() => updateUser('Updated via Store (Zustand)')}>
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
            <p className="clean-text">I know nothing about data.</p>
            <GrandChild />
        </div>
    );
}

// Level 2
function Parent() {
    return (
        <div className="level-box level-2">
            <div className="role-badge role-parent">👨 Parent</div>
            <p className="clean-text">I'm just a layout.</p>
            <Child />
        </div>
    );
}

// Level 1
export default function StoreExample() {
    const { user } = useUserStore();

    return (
        <div className="level-box level-1">
            <div className="role-badge role-grandparent">Global Store Viewer</div>
            <p>Store lives outside components.</p>
            <p>Current User in Store: {user.name}</p>
            <Parent />
        </div>
    );
}
