import React, {useContext, useState} from 'react'
import {styled} from "@mui/material/styles"
import Button from "@mui/material/Button";
import WriterNav from '../writerNav';
import { RepositoryContext } from '../../../../context/RepositoryContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '@mui/material/Input';

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
    backgroundColor: "#FC8E40",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  });

  const FormContainer = styled("div")({
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border:"2px solid #FC8E40",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
});

  const ModalOverlay = styled("div")({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  });

  const CustomeInput = styled(Input)({
    padding: "0.2rem",

    marginTop:"1.4rem",
    "&:after": {
        borderBottomColor: "#FC8E40", // Focus underline color
    },
  })

  const Repositories = () => {

    const {handleAddRepository,showForm,loading,setShowForm} = useContext(RepositoryContext)
    const repositories = [
        { id: 1, name: "Adventure Tales" },
        { id: 2, name: "Harry and the lost wand" },
    ];

    return (
    <>
      <WriterNav/>
      <RepositoriesContainer>
      {repositories.map((repo) => (
          <RepositoryCard key={repo.id}>
              {repo.name}
              <AddButton onClick={() => console.log(`Editing ${repo.name}`)}>
              <i class="fas fa-pencil-alt"></i>
              </AddButton>
          </RepositoryCard>
      ))}
      <RepositoryCard onClick={handleAddRepository}>
          <span>+ Add Repository</span>
      </RepositoryCard>
      </RepositoriesContainer>

      {/* create repo form */}
      {showForm &&(
        <ModalOverlay>
          <FormContainer>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>

            <form onSubmit={{/*handleFormSubmit}*/}}>
              <CustomeInput type="text"
              required
              placeholder='Title'
              fullWidth
              />
              <CustomeInput type="text"
              required
              placeholder='The Fanfiction derrived from book...talks about..'
              multiline
              rows={4}
              fullWidth
              />
              <Button
              variant='contained'
              color='#FC8E40'
              type='submit'
              disabled = {loading}
              sx={{
                  width: '80%',
                  borderRadius: '10px',
                  margin: '60px auto 0px auto',
                  display: 'block',
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: '500',
                  fontSize: '14px',
                  border: 'black 2px solid',
                  '&:hover': {
                      border:'solid 2px #FC8E40',
            }
        }}
        >Create Repository</Button>
            </form>
          </FormContainer>
        </ModalOverlay>
      )}
    </>
    );
};

export default Repositories;