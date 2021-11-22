import React from "react";
import {
  Modal,
  Fade,
  Avatar,
  Box,
  IconButton,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { ReactComponent as LinkedIcon } from "./media/linked.svg";
import { ReactComponent as GitIcon } from "./media/git.svg";

export default function Contact(props) {
  return (
    <Modal open={props.open} onClose={props.handleClose} closeAfterTransition>
      <Fade in={props.open}>
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
              color="primary.dark"
            >
              {props.membro.nome}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              "{props.membro.descricao}"
            </Typography>

            {/*  email  */}
            {props.membro.email && (
              <Typography variant="body2" mt={2} color="grayText">
                {props.membro.email}
              </Typography>
            )}

            {/*  Icones  */}
            <Box mt={2}>
              {/*  linkedin  */}
              {props.membro.linkedin && (
                <IconButton
                  sx={{ fontSize: 45 }}
                  href={props.membro.linkedin}
                  target="_blank"
                >
                  <LinkedIcon />
                </IconButton>
              )}

              {/*  github  */}
              {props.membro.github && (
                <IconButton
                  sx={{ fontSize: 45 }}
                  href={props.membro.github}
                  target="_blank"
                >
                  <GitIcon />
                </IconButton>
              )}
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
}
