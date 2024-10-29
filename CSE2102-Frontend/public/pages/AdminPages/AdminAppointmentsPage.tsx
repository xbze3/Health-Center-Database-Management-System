import AppointmentsPageComponent from "../../../src/components/AppointmentsPageComponent";

function AdminAppointmentsPage() {
    return (
        <>
            <AppointmentsPageComponent
                initialFetchUrl="http://localhost:8081/admin-appointments"
                searchBaseUrl="http://localhost:8081/admin-appointments"
            />
        </>
    );
}

export default AdminAppointmentsPage;
