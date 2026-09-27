import SidebarItem from "./SidebarItem";

const sidebarItems = [
    {
        labelKey: "navigation.home",
        path: "/",
    },
    {
        labelKey: "navigation.familyClusters",
        path: "/families",
    },
    {
        labelKey: "navigation.settings",
        path: "/settings",
    },
];

function SidebarList() {
    return (
        <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
                <SidebarItem
                    key={item.path}
                    labelKey={item.labelKey}
                    path={item.path}
                />
            ))}
        </nav>
    );
}

export default SidebarList;