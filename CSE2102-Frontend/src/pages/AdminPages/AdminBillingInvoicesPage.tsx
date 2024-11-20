import BillingInvoicesPage from "../../../src/components/PageComponents/BillingInvoicesPageComponent";
import AdminNavBar from "../../../src/components/AdminComponents/AdminNavBar";
import BillingInvoicesAdditionForm from "../../components/AdditionForms/BillingInvoicesAdditionForm";

const BILLING_INVOICES_ROUTE =
    import.meta.env.VITE_ADMIN_GET_BILLING_INVOICES || "";

function AdminBillingInvoicesPage() {
    return (
        <>
            <AdminNavBar />

            <BillingInvoicesAdditionForm />

            <BillingInvoicesPage
                initialFetchUrl={BILLING_INVOICES_ROUTE}
                searchBaseUrl={BILLING_INVOICES_ROUTE}
            />
        </>
    );
}

export default AdminBillingInvoicesPage;
