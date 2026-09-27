import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

interface SidebarItemProps {
    labelKey: string;
    path: string;
}

function SidebarItem({ labelKey, path }: SidebarItemProps) {
    const { t } = useTranslation();

    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                    ? "bg-primary text-white"
                    : "text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                }`
            }
        >
            {t(labelKey)}
        </NavLink>
    );
}

export default SidebarItem;