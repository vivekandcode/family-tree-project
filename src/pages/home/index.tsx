import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation()
    return (
        <div className="text-primary">{t("app.name")}</div>
    )
}

export default Home;