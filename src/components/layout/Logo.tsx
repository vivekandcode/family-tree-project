import { useTranslation } from "react-i18next";

function Logo() {
    const { t } = useTranslation()
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <h1 className="text-primary-dark font-bold p-2">
                {t("app.name")}
            </h1>
        </div>
    )
}

export default Logo;