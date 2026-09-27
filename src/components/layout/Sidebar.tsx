import Logo from "./Logo";
import SidebarList from "./SidebarList";

function Sidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r border-border bg-surface">
            {/* Logo - always stays at the top */}
            <div className="shrink-0 border-b border-border p-4">
                <Logo />
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto p-3">
                <SidebarList />
            </div>
        </aside>
    );
}

export default Sidebar;