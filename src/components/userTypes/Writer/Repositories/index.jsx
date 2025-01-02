import React, {useState} from 'react'
import {styled} from "@mui/material/styles"
import Button from "@mui/material/Button";

const RepositoriesContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
})

const RepositoryCard = styled("div")({
    position: "relative",
    width: "300px",
    height: "400px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
  });

  const AddButton = styled(Button)({
    position: "absolute",
    top: "10px",
    right: "10px",
    minWidth: "30px",
    height: "30px",
    padding: "0",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  });

  const Repositories = () => {
    const repositories = [
        { id: 1, name: "Adventure Tales" },
        { id: 2, name: "Harry and the lost wand" },
    ];

    const handleAddRepository = () => {
        console.log("working!");
    };

    return (
      <RepositoriesContainer>
      {repositories.map((repo) => (
          <RepositoryCard key={repo.id}>
              {repo.name}
              <AddButton onClick={() => console.log(`Editing ${repo.name}`)}>
                  
              </AddButton>
          </RepositoryCard>
      ))}
      <RepositoryCard onClick={handleAddRepository}>
          <span>+ Add Repository</span>
      </RepositoryCard>
  </RepositoriesContainer>
    );
};

export default Repositories;