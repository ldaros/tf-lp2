import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ReactComponent as LinkedIcon } from "./media/linked.svg";
import { ReactComponent as GitIcon } from "./media/git.svg";

const Modal = React.lazy(() => import("@mui/material/Modal"));
const Avatar = React.lazy(() => import("@mui/material/Avatar"));
const Fade = React.lazy(() => import("@mui/material/Fade"));
const IconButton = React.lazy(() => import("@mui/material/IconButton"));
const Box = React.lazy(() => import("@mui/material/Box"));

export default function Member(props) {
  const theme = useTheme(); // importando o tema do material-ui

  // handles pro modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          height: "100%",
          cursor: "pointer",
          "&:hover, &:active, &:focus": {
            boxShadow: "11px 2px 54px #00838F",
          },
        }}
        onClick={handleOpen} // abre o modal
      >
        <CardMedia
          component="img"
          image={props.membro.img}
          alt={props.membro.nome}
          width="100%"
          height="auto"
        />

        <CardContent>
          <Typography variant="body1" align="center" fontWeight="bold">
            {props.membro.nome}
          </Typography>
        </CardContent>
      </Card>

      <React.Suspense fallback={<div>Carregando...</div>}>
        <Modal open={open} onClose={handleClose} closeAfterTransition>
          <Fade in={open}>
            <Card
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", md: "500px" },
              }}
              align="center"
            >
              <CardContent>
                <Avatar src={props.membro.img} sx={{ width: 80, height: 80 }} />

                <Typography
                  variant="h6"
                  component="h2"
                  align="center"
                  color={theme.palette.primary.dark}
                >
                  {props.membro.nome}
                </Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                  "{props.membro.descricao}"
                </Typography>

                {/*  email  */}
                {props.membro.email ? (
                  <Typography variant="body2" mt={2} color="gray">
                    {props.membro.email}
                  </Typography>
                ) : null}

                {/*  Icones  */}
                <Box mt={2}>
                  {/*  linkedin  */}
                  {props.membro.linkedin ? (
                    <IconButton
                      sx={{ fontSize: 45 }}
                      href={props.membro.linkedin}
                    >
                      <LinkedIcon />
                    </IconButton>
                  ) : null}

                  {/*  github  */}
                  {props.membro.github ? (
                    <IconButton
                      sx={{ fontSize: 45 }}
                      href={props.membro.github}
                    >
                      <GitIcon />
                    </IconButton>
                  ) : null}
                </Box>
              </CardContent>
            </Card>
          </Fade>
        </Modal>
      </React.Suspense>
    </>
  );
}
