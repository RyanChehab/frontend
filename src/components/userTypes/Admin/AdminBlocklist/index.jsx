import React,{useContext} from "react";
import { styled } from "@mui/system";
import { AdminListContext } from "../../../../context/AdminListContext";

const BlockUserContainer = styled("div")({
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "20px auto",
    maxHeight: "400px",
    overflowY: "auto",
});

const Table = styled("table")({
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
});

const TableHeader = styled("thead")({
    backgroundColor: "#FC8E40",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1,
});

const TableRow = styled("tr")({
    "&:nth-of-type(even)": {
        backgroundColor: "#f9f9f9",
    },
    "&:hover": {
        backgroundColor: "#f1f1f1",
    },
});

const TableHeaderCell = styled("th")({
    padding: "10px",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
});

const TableCell = styled("td")({
    padding: "10px",
    borderBottom: "1px solid #ddd",
});

const AdminBlocklist = () => {
    const {users} = useContext(AdminListContext);

    return (
        <BlockUserContainer>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Role</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <tbody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.user_type}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                {user.blocked ? (
                                    <span style={{ color: "red" }}>Blocked</span>
                                ) : (
                                    <span style={{ color: "green" }}>Active</span>
                                )}
                            </TableCell>
                            <TableCell>
                                {user.blocked ? (
                                    <span><button  style={{ color: "green"}}>Unblock</button></span>
                                ) : (
                                    <span><button style={{ color: "red" }}>block</button></span>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </BlockUserContainer>
    );
};

export default AdminBlocklist;
