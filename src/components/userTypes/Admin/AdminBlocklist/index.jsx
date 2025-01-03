import React from "react";
import { styled } from "@mui/system";

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
