import PrescriptionsPageComponent from "../../../src/components/PageComponents/PrescriptionsPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";

const PRESCRIPTIONS_ROUTE = import.meta.env.VITE_ADMIN_GET_PRESCRIPTIONS || "";

function AdminPrescriptionsPage() {
    return (
        <>
            <AdminNavBar />

            <PrescriptionsPageComponent
                initialFetchUrl={PRESCRIPTIONS_ROUTE}
                searchBaseUrl={PRESCRIPTIONS_ROUTE}
            />
        </>
    );
}

export default AdminPrescriptionsPage;