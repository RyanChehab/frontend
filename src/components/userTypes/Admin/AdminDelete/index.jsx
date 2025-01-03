import React,{useContext} from "react";
import { styled } from "@mui/system";
import { AdminListContext } from "../../../../context/AdminListContext";


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

const TableWrapper = styled("div")({
    maxHeight: "400px",
    overflowY: "auto", 
    
});

const AdminDeletelist = () => {
    const {users} = useContext(AdminListContext);

    return(
        <TableWrapper>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>ID</TableHeaderCell>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Role</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Manage User</TableHeaderCell>
                        
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
                                <button style={{background:"red",color:"white"}} >Delete User</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            </TableWrapper>
    )
}

export default AdminDeletelist;
