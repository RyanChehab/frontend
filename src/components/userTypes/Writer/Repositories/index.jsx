import React, {useContext, useState} from 'react'
import {styled} from "@mui/material/styles"
import { useNavigate } from 'react-router-dom';
import WriterNav from '../writerNav';
import { RepositoryContext } from '../../../../context/RepositoryContext';
import { WriterDevContext } from '../../../../context/WriterDev';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '@mui/material/Input';
import { Button, Snackbar, Alert, Slide} from '@mui/material';

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
    overflow: "hidden",
  });

  export const AddButton = styled(Button)({
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

  export const FormContainer = styled("div")({
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border:"2px solid #FC8E40",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  });

  const CardImage = styled("div")({
    width: "100%",
    height: "70%",
    overflow: "hidden",
    position: "relative",
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease",
    },
    "&:hover img": {
        transform: "scale(1.1)", // Zoom effect on hover
    },
});

const CardDetails = styled("div")({
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "30%",
    background: "rgba(0, 0, 0, 0.7)", 
    color: "white",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "16px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "height 0.3s ease, opacity 0.3s ease",
    cursor: "pointer",
    "&:hover": {
        height: "50%",
    },
    "& h3": {
        margin: 0,
        fontSize: "18px",
    },
    "& p": {
        margin: "5px 0 0",
        fontSize: "14px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxHeight: "40px",
    },
    "&:hover p": {
        maxHeight: "none",
        whiteSpace: "normal",
    },
  });

  export const ModalOverlay = styled("div")({
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

  export const CustomeInput = styled(Input)({
    padding: "0.2rem",

    marginTop:"1.4rem",
    "&:after": {
        borderBottomColor: "#FC8E40", // Focus underline color
    },
  })

  const DeleteButton = styled(Button)({
    position: "absolute",
    top: "50px",
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
  })

  export function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }


  const Repositories = () => {
    const navigate = useNavigate();
    const {handleAddRepository,showForm,loading,setShowForm, handleCreateRepository,setTitle,setDescription,response,handleCloseNotification,open,type,repositories,handleDeleteRepository} = useContext(RepositoryContext)
    
    const {handleGetContent} = useContext(WriterDevContext)
    return (
    <>
      <WriterNav/>
      <RepositoriesContainer>
    {repositories.map((repo) => (
        <RepositoryCard key={repo.id}>
            <CardImage>
                <img src={repo.img_url} alt={`${repo.title} cover`} />
            </CardImage>
            <CardDetails>
                <h3>{repo.title}</h3>
                {localStorage.setItem(`repo_${repo.id}`, repo.title)}
                <p>{repo.description}</p>
            </CardDetails>
            <AddButton onClick={async () => {
                
                await handleGetContent(repo.id);
                navigate(`/WriterDev/${repo.id}`);
            }}>
                <i className="fas fa-pencil-alt"></i>
            </AddButton>
                <DeleteButton
                    onClick={async () => {
                        const confirmDelete = window.confirm(
                            `Are you sure you want to delete the repository "${repo.title}"?`
                        );
                        if (confirmDelete) {
                            await handleDeleteRepository(repo.id);
                        }
                    }}
                >
                    <i className="fas fa-trash-alt"></i>
                </DeleteButton>
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

            <form onSubmit={handleCreateRepository}>
              <CustomeInput type="text"
              required
              placeholder='Title'
              fullWidth
              onChange={(e)=>setTitle(e.target.value)}
              />
              <CustomeInput type="text"
              required
              placeholder='The Fanfiction derrived from book...talks about..'
              multiline
              rows={4}
              fullWidth
              onChange={(e)=>setDescription(e.target.value)}
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
        >{loading? "Creating..." :"Create Repository"}</Button>
            </form>
          </FormContainer>
        </ModalOverlay>
      )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert
            severity={type}
            sx = {{width: "100%"}}
            >
                {response}
            </Alert>
        </Snackbar>
    </>
    );
};

export default Repositories;