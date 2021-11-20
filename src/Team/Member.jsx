import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

import loadable from "@loadable/component";

const Contact = loadable(() => import("./Contact"));

export default function Member(props) {
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

      {/* Modal */}
      <Contact open={open} handleClose={handleClose} membro={props.membro} />
    </>
  );
}
