import { theme } from "../../styles/theme";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Headphones, Person } from "phosphor-react";

export const SideBar = () => {
  return (
    <div
      style={{
        margin: "0",
        width: "250px",
        height: "100%",
        borderRadius: "0 20px 20px 0",
        borderRight: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>
          Audio
          <span
            style={{
              color: theme.palette.secondary.main,
            }}
          >
            V
          </span>
          ibe
        </h1>
      </div>

      <div>
        <List
          sx={{
            width: "100%",
            bgcolor: `${theme.palette.primary.dark}`,
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton href="#">
            <ListItemIcon>
              <Headphones
                style={{
                  color: "#7fffd4",
                }}
                size={24}
                weight="fill"
              />
            </ListItemIcon>
            <ListItemText primary="Musicas" />
          </ListItemButton>

          <ListItemButton href="#">
            <ListItemIcon>
              <Person
                style={{
                  color: "#d800ff",
                }}
                size={24}
                weight="fill"
              />
            </ListItemIcon>
            <ListItemText primary="Artistas" />
          </ListItemButton>
        </List>
      </div>
    </div>
  );
};
